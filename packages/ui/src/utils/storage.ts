export const storage = (key: string) => ({
	get: () => {
		const item: any = localStorage.getItem(key);
		return typeof item === 'object' ? JSON.parse(item) : item;
	},
	set: (data: any) => {
		const set = typeof data === 'object' ? JSON.stringify(data) : data;
		localStorage.setItem(key, set);
	},
	unset: () => {
		localStorage.removeItem(key);
	},
	isSet: () => !!localStorage.getItem(key)
});
