// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import { remarkModifiedTime } from "./remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://new.dct0.tech",
  integrations: [sitemap()],
  trailingSlash: "never",
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
});
