import { getTicketVendor } from '$lib/api/ticket';
import { getPopularProduct, getProductVendor, getVendorDetail } from '$lib/api/vendor';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, url }) => {

    const [detail,product, popularProduct,listTicket] = await Promise.all([getVendorDetail(params.vendorSlug), getProductVendor(params.vendorSlug), getPopularProduct(params.vendorSlug), getTicketVendor(params.vendorSlug)])

    return {
        maxage: 3600,
        detail,
        product,
        popularProduct,
        listTicket
    };
}) satisfies PageServerLoad;

