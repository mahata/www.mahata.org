## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Cloudflare Pages

Production deploys are automated: every push to `main` triggers
[`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml), which builds the app and runs
`pnpm run deploy` in CI. That workflow, not a developer's local machine, is the source of truth
for what's live.

To deploy manually (e.g. to debug the pipeline), you also need:

- Node.js >= 22 (Wrangler's minimum requirement)
- Cloudflare credentials available to Wrangler, either via `wrangler login` or a
  `CLOUDFLARE_API_TOKEN` environment variable
- A `CLOUDFLARE_ACCOUNT_ID` environment variable, so Wrangler doesn't need to look up the
  account for you

```bash
pnpm run deploy
```
