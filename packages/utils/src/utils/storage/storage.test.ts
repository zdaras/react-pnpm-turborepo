import { storage } from './storage';

describe('storage', () => {
	const key = 'testKey';
	const testData = { name: 'John Doe', age: 30 };

	beforeEach(() => {
		localStorage.clear();
	});

	it('should set and get data from localStorage', () => {
		const storageInstance = storage(key);
		storageInstance.set(testData);
		const retrievedData = JSON.parse(storageInstance.get() ?? '');
		expect(retrievedData).toEqual(testData);
	});

	it('should set string and get data from localStorage', () => {
		const storageInstance = storage(key);
		storageInstance.set('testData');
		const retrievedData = storageInstance.get();
		expect(retrievedData).toEqual('testData');
	});

	it('should unset data from localStorage', () => {
		const storageInstance = storage(key);
		storageInstance.set(testData);
		storageInstance.unset();
		const retrievedData = storageInstance.get();
		expect(retrievedData).toBeNull();
	});

	it('should check if data is set in localStorage', () => {
		const storageInstance = storage(key);
		expect(storageInstance.isSet()).toBe(false);
		storageInstance.set(testData);
		expect(storageInstance.isSet()).toBe(true);
	});
});
