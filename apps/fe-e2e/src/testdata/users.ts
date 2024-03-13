import { NODE_ENV } from '../utils/config';

const usersList = {
	development: { main: { username: 'test@mailinator.com', password: 'Testing123!' } },
	production: { main: { username: 'test@mailinator.com', password: 'Testing123!' } }
};

export const users = usersList[NODE_ENV]; // export users by environment
