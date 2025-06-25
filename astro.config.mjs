// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from "@astrojs/node";
import clerk from "@clerk/astro";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [tailwind(), clerk(), react()],
  adapter: vercel({}),
});