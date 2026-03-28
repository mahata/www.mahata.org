import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.mahata.org",
  output: "static",
  integrations: [tailwind(), mdx()],
});
