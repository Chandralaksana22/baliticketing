import { getTicketVendor } from '$lib/api/ticket';
import { getPopularProduct, getProductVendor, getVendor, getVendorDetail } from '$lib/api/vendor';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, url }) => {

    const [vendor,detail,product, popularProduct,listTicket] = await Promise.all([getVendor(),getVendorDetail(params.vendorSlug), getProductVendor(params.vendorSlug), getPopularProduct(params.vendorSlug), getTicketVendor(params.vendorSlug)])

    return {
        maxage: 3600,
        vendor,
        detail,
        product,
        popularProduct,
        listTicket
    };
}) satisfies PageServerLoad;

