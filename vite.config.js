import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use repo name as base when building on GitHub Pages; default to '/'
const repoName = process.env.GITHUB_REPOSITORY ? process.env.GITHUB_REPOSITORY.split('/')[1] : '';

export default defineConfig({
	plugins: [react()],
	base: repoName ? `/${repoName}/` : '/',
});