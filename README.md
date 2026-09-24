## Getting Started

The site is plain HTML and CSS in [`public/`](public), with no build step. Edit
`public/index.html` and `public/style.css` directly.

Link icons are SVG `<symbol>`s at the top of `public/index.html`, referenced with
`<use href="#icon-...">`. To add a link, copy an existing `<a class="btn">` block. When adding an
icon, keep the license comment of the icon set it comes from.

To preview locally, run:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Opening
`public/index.html` directly in a browser also works.

## Deploy on Netlify

Biome checks are automated for every pull request and push to `main` by
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). After the check passes on a push to
`main`, the workflow deploys `public/` to the existing Netlify site serving
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
pnpm run deploy
```
