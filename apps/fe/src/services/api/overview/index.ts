import { get } from '../axios';

export default {
	getOverview: () => get('overview').then(({ data }) => data)
};
