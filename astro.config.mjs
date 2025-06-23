// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), clerk(), react()],
  adapter: node({ mode: "standalone" }),
  output: "server",
});