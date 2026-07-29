import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://babyheadman.com",

  integrations: [
    icon({
      include: {
        mdi: ["instagram", "youtube", "linkedin"],
        "simple-icons": ["tiktok"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});