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
- Wrangler installed globally (`pnpm add -g wrangler`), matching what CI does: this project has
  no direct `wrangler` dependency, so a bare `wrangler` command isn't available otherwise
- Cloudflare credentials available to Wrangler, either via `wrangler login` or a
  `CLOUDFLARE_API_TOKEN` environment variable
- A `CLOUDFLARE_ACCOUNT_ID` environment variable, so Wrangler doesn't need to look up the
  account for you

`pnpm run deploy` passes `wrangler pages deploy --no-bundle`: newer Wrangler versions try to
re-bundle `@cloudflare/next-on-pages`'s output and fail to resolve its dynamic
`__next-on-pages-dist__/assets` glob import when the project has no such assets, so bundling is
skipped and the already-built `_worker.js` is uploaded as-is.

```bash
pnpm run deploy
```
