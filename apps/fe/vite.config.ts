import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import topLevelAwait from 'vite-plugin-top-level-await';
import tsconfigPaths from 'vite-tsconfig-paths';
import { type UserConfig } from 'vitest';

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		plugins: [react(), tsconfigPaths(), svgr(), topLevelAwait()],
		server: {
			port: Number(process.env.VITE_PORT)
		},
		build: {
			chunkSizeWarningLimit: 1024 // 1MB
		},
		resolve: {
			alias: [{ find: '#', replacement: resolve(__dirname, 'src') }]
		},
		test: {
			globals: true,
			environment: 'happy-dom',
			setupFiles: './src/utils/setup-tests.ts',
			include: ['./src/**/*.test.ts?(x)']
		} as UserConfig
	});
};
