import type { PageLoad } from './$types';

export const load = (({ url, data }) => {
	return {
		...data,
	};
}) satisfies PageLoad;
