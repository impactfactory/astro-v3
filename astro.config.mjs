import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [
    mdx(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
});
