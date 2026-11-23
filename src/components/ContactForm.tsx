import { useState } from "react";
import type { FormEvent } from "react";
import { sendContactMessage } from "#/server/contact";
import { serviceOptions, site } from "#/lib/site";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const f = new FormData(form);
    const field = (name: string) => String(f.get(name) ?? "");

    setStatus({ state: "sending" });
    try {
      const result = await sendContactMessage({
        data: {
          name: field("name"),
          phone: field("phone"),
          email: field("email"),
          service: field("service"),
          county: field("county"),
          message: field("message"),
          website: field("website"),
        },
      });
      if (result.ok) {
        form.reset();
        setStatus({ state: "sent" });
      } else {
        setStatus({ state: "error", message: result.error });
      }
    } catch {
      setStatus({ state: "error", message: "Your message could not be sent." });
    }
  }

  const sending = status.state === "sending";

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          placeholder="e.g. Wanjiku Kamau"
          maxLength={100}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="07XX XXX XXX"
          maxLength={30}
          required
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email (optional)</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          maxLength={150}
        />
      </div>
      <div className="field">
        <label htmlFor="county">County</label>
        <input
          id="county"
          name="county"
          placeholder="Your county"
          maxLength={60}
        />
      </div>
      <div className="field full">
        <label htmlFor="service">What can I help you with?</label>
        <select id="service" name="service" defaultValue="" required>
          <option value="">Choose a service</option>
          {serviceOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <div className="field full">
        <label htmlFor="message">What would you like to plan or protect?</label>
        <textarea
          id="message"
          name="message"
          maxLength={3000}
          placeholder="Share a little about what you have in mind (optional)"
        />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn field full" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Send my request"}
      </button>
      <p className="form-note">
        Your details are sent straight to S.K. Wairimu and used only to respond
        to your request.
      </p>
      <p
        className={`form-status${status.state === "error" ? " error" : ""}`}
        aria-live="polite"
      >
        {status.state === "sent" &&
          "Thank you. Your request has been sent and I will be in touch soon."}
        {status.state === "error" && (
          <>
            {status.message} Please try again, or reach me on{" "}
            <a href={site.whatsapp} target="_blank" rel="noopener">
              WhatsApp
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
