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

```sh
pnpm exec wrangler login
pnpm exec wrangler r2 bucket create sk-wairimu-images
pnpm images:upload                       # assets/ -> R2
pnpm exec wrangler secret put RESEND_API_KEY
pnpm run deploy
```

## Where things live

- `src/routes/index.tsx` – the page and its content
- `src/components/ContactForm.tsx` + `src/server/contact.ts` – contact form and the
  server function that emails it through Resend
- `src/routes/images/$.ts` – serves `/images/*` from the R2 bucket
- `wrangler.jsonc` – bucket binding and the to/from email addresses
- `assets/` – source photos; add a file here, run `pnpm images:upload`, then use `img('name.jpg')`
