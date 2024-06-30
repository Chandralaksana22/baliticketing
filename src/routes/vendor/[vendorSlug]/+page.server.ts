import { getPopularProduct, getProductVendor, getVendorDetail } from '$lib/api/vendor';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, url }) => {

    const [detail,product, popularProduct] = await Promise.all([getVendorDetail(params.vendorSlug), getProductVendor(params.vendorSlug), getPopularProduct(params.vendorSlug)])

    return {
        maxage: 3600,
        detail,
        product,
        popularProduct
    };
}) satisfies PageServerLoad;

