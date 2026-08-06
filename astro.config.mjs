import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://frankocenanpage.netlify.app",
  integrations: [sitemap()],
});
