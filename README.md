# S.K. Wairimu website

React + TanStack Start, deployed to Cloudflare. Photos are stored in R2.
The original static site is kept in `legacy/` for reference.

## Develop

```sh
pnpm install
pnpm images:seed   # once: copies assets/ into the local dev R2 bucket
pnpm dev           # http://localhost:3000
```

Without a `RESEND_API_KEY` in `.dev.vars`, the contact form prints the
message in the terminal instead of emailing it.

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) builds the site,
creates the R2 bucket if needed, uploads `assets/` to it and deploys the Worker.
There is no manual deploy.

The workflow needs these repository secrets (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN` – Cloudflare API token with Workers Scripts: Edit and
  Workers R2 Storage: Edit on the account
- `CLOUDFLARE_ACCOUNT_ID` – the Cloudflare account ID

The contact form's Resend key is not in GitHub. After the first deploy, add it in
the Cloudflare dashboard: Workers & Pages → `sk-wairimu` → Settings → Variables and
Secrets → Add, type **Secret**, name `RESEND_API_KEY`. Deploys keep it.

## Where things live

- `src/routes/index.tsx` – the page and its content
- `src/components/ContactForm.tsx` + `src/server/contact.ts` – contact form and the
  server function that emails it through Resend
- `src/routes/images/$.ts` – serves `/images/*` from the R2 bucket
- `wrangler.jsonc` – bucket binding and the to/from email addresses
- `assets/` – source photos; add a file here, use `img('name.jpg')`, and push (the deploy uploads it to R2)
