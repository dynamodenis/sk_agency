#!/bin/sh
# Copies everything in assets/ into the R2 bucket.
#   --local   seeds the local dev bucket (.wrangler/state)
#   --remote  uploads to the real bucket on Cloudflare
set -e
MODE="${1:---local}"
BUCKET="sk-wairimu-images"
for f in assets/*; do
  pnpm exec wrangler r2 object put "$BUCKET/$(basename "$f")" --file "$f" "$MODE"
done
