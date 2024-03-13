export const storage = (key: string) => ({
	get: () => localStorage.getItem(key),
	set: (data: any) => {
		const set = typeof data === 'object' ? JSON.stringify(data) : data;
		localStorage.setItem(key, set);
	},
	unset: () => {
		localStorage.removeItem(key);
	},
	isSet: () => !!localStorage.getItem(key)
});
