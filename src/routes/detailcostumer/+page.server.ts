import type { PageServerLoad } from './$types';
import { getVendor } from '$lib/api/vendor';

export const load = (async ({ url }) => {
    const [
        vendor,
    ] = await Promise.all([
        getVendor(),
    ]);

    return {
        maxage: 3600,
        vendor,
    };
}) satisfies PageServerLoad;