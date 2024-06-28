import type { PageServerLoad } from './$types';
import { getVendor, getBaliFarmPopular, getBaliZooPopular, getBaliBirdParkPopular, getBaliSafariPopular } from '$lib/api/vendor';
import { getTicket } from '$lib/api/ticket';

export const load = (async ({ params, url }) => {
    const keyword: string = url.searchParams.get('keyword') ?? '';
    const [
        vendor,
        balifarm,
        balizoo,
        balibird,
        balisafari,
        listticket
    ] = await Promise.all([
        getVendor(),
        getBaliFarmPopular(),
        getBaliZooPopular(),
        getBaliBirdParkPopular(),
        getBaliSafariPopular(),
        getTicket(keyword)
    ]);

    return {
        maxage: 3600,
        keyword:keyword,
        vendor,
        balifarm,
        balizoo,
        balibird,
        balisafari,
        listticket,
    };
}) satisfies PageServerLoad;
