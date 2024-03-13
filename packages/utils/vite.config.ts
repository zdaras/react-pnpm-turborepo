import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import type { UserConfig } from 'vitest';

export default defineConfig({
	plugins: [react(), topLevelAwait()],
	build: {
		emptyOutDir: false,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es']
		},
		rollupOptions: {
			output: {
				entryFileNames: '[name].js',
				globals: {
					react: 'React'
				}
			},
			external: [
				'react',
				'react-i18next',
				'i18next',
				'react-hook-form',
				'react-router-dom',
				'@tanstack/react-query',
				'react/jsx-runtime'
			]
		}
	},
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: './src/setup-tests.ts',
		include: ['./src/**/*.test.ts?(x)']
	} as UserConfig
});
