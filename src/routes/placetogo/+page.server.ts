import type { PageServerLoad } from './$types';
import { getVendor,getBaliFarmPopular, getBaliZooPopular, getBaliBirdParkPopular, getBaliSafariPopular } from '$lib/api/vendor';

export const load = (async ({ url }) => {
    const [
        vendor,
        balifarm,
        balizoo,
        balibird,
        balisafari
    ] = await Promise.all([
        getVendor(),
        getBaliFarmPopular(),
        getBaliZooPopular(),
        getBaliBirdParkPopular(),
        getBaliSafariPopular(),
    ]);

    return {
        maxage: 3600,
        vendor,
        balifarm,
        balizoo,
        balibird,
        balisafari,
    };
}) satisfies PageServerLoad;