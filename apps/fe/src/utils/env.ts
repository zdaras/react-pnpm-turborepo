export const env = {
	IS_DEV: import.meta.env.NODE_ENV === 'development',
	IS_PROD: import.meta.env.NODE_ENV === 'production',
	PORT: import.meta.env.VITE_PORT
};
