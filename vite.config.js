import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { asc } from "rollup-plugin-assemblyscript";

export default defineConfig({
	plugins: [sveltekit(), asc({ fileExtension: ".as" })]
});
