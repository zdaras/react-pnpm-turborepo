import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import topLevelAwait from 'vite-plugin-top-level-await';
import type { UserConfig } from 'vitest';

export default defineConfig({
	plugins: [react(), svgr(), topLevelAwait()],
	build: {
		emptyOutDir: false,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['es']
		},
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name][extname]',
				entryFileNames: '[name].js',
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			},
			external: ['react', 'react-dom', 'react-hook-form', 'react-router-dom', 'styled-components', 'react/jsx-runtime']
		}
	},
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: './src/setup-tests.ts',
		include: ['./src/**/*.test.ts?(x)']
	} as UserConfig
});
