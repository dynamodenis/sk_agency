import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";
import { serviceOptions } from "#/lib/site";

export type ContactInput = {
  name: string;
  phone: string;
  email: string;
  service: string;
  county: string;
  message: string;
  /** Honeypot: real visitors never fill this in. */
  website: string;
};

export type ContactResult = { ok: true } | { ok: false; error: string };

const clean = (value: unknown, max: number) =>
  (typeof value === "string" ? value : "")
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);

function validate(input: unknown): ContactInput {
  const raw = (input ?? {}) as Record<string, unknown>;
  return {
    name: clean(raw.name, 100),
    phone: clean(raw.phone, 30),
    email: clean(raw.email, 150),
    service: clean(raw.service, 60),
    county: clean(raw.county, 60),
    message: (typeof raw.message === "string" ? raw.message : "")
      .trim()
      .slice(0, 3000),
    website: clean(raw.website, 200),
  };
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator(validate)
  .handler(async ({ data }): Promise<ContactResult> => {
    // Bots fill hidden fields; pretend it worked and send nothing.
    if (data.website) return { ok: true };

    if (!data.name || !data.phone) {
      return { ok: false, error: "Please add your name and phone number." };
    }
    if (!(serviceOptions as readonly string[]).includes(data.service)) {
      return { ok: false, error: "Please choose a service." };
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return { ok: false, error: "That email address does not look right." };
    }

    const text = [
      `Name: ${data.name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || "Not provided"}`,
      `Interested in: ${data.service}`,
      `County: ${data.county || "Not specified"}`,
      "",
      "Message:",
      data.message || "I would like to learn more.",
    ].join("\n");

    if (!env.RESEND_API_KEY) {
      if (import.meta.env.DEV) {
        console.log(
          `[contact] RESEND_API_KEY not set, email not sent:\n${text}`,
        );
        return { ok: true };
      }
      console.error("[contact] RESEND_API_KEY is not configured");
      return { ok: false, error: "Email is not available right now." };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: env.CONTACT_FROM_EMAIL,
        to: [env.CONTACT_TO_EMAIL],
        reply_to: data.email || undefined,
        subject: `Website enquiry: ${data.service} (${data.name})`,
        text,
      }),
    });

    if (!response.ok) {
      console.error(
        "[contact] Resend error",
        response.status,
        await response.text(),
      );
      return { ok: false, error: "Your message could not be sent." };
    }
    return { ok: true };
  });
