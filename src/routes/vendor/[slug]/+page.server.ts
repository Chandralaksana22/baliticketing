import { getPopularProduct, getProductVendor, getVendorDetail } from '$lib/api/vendor';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, url }) => {

    const [detail,product, popularProduct] = await Promise.all([getVendorDetail(params.slug), getProductVendor(params.slug), getPopularProduct(params.slug)])

    return {
        maxage: 3600,
        detail,
        product,
        popularProduct
    };
}) satisfies PageServerLoad;

