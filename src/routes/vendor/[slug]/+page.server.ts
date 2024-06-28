import { getVendorDetail } from '$lib/api/vendor';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, url }) => {

    const [detail] = await Promise.all([getVendorDetail(params.slug)])

    return {
        maxage: 3600,
        detail,
    };
}) satisfies PageServerLoad;

