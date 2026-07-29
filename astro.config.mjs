import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://babyheadman.com",
  vite: {
    plugins: [tailwindcss()],
  },
});