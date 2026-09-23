## Getting Started

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Netlify

Production deploys are automated: every push to `main` triggers
[`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml), which builds the static Next.js
export and deploys `out/` to the existing Netlify site serving
[mahata.org](https://mahata.org). That workflow is the source of truth for what is live.

Configure these GitHub Actions secrets before running the workflow:

- `NETLIFY_AUTH_TOKEN`: a Netlify personal access token with access to the production site
- `NETLIFY_SITE_ID`: the Site ID shown in the existing production site's Netlify configuration

The Site ID must belong to the site already serving `mahata.org`. Do not create a new Netlify
site, because deploying to a second site will not update the production domain.

To deploy manually for troubleshooting, export the same credentials and run:

```bash
export NETLIFY_AUTH_TOKEN="..."
export NETLIFY_SITE_ID="..."
pnpm run build
pnpm run deploy
```
