// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import clerk from "@clerk/astro";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.arkirehq.com', 
  integrations: [tailwind(), clerk(), react(), sitemap()],
  adapter: vercel({}),
});