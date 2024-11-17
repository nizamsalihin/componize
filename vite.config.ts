import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			// allowing serving files from one level up to the project roo
			allow: ['..']
		}
	}
});
