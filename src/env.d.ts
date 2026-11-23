// Secrets that are set in the Cloudflare dashboard rather than in wrangler.jsonc,
// so `wrangler types` does not know about them.
declare namespace Cloudflare {
  interface Env {
    /** Resend key for the contact form. Unset until it is added in the dashboard. */
    RESEND_API_KEY?: string;
  }
}
