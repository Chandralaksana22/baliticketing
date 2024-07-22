import { getListTicket, getProduct } from '$lib/api/ticket';
import { getVendor } from '$lib/api/vendor';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url, }) => {
    const { vendorSlug, productSlug, } = params;
    const childrenCount: string = url.searchParams.get('children') ?? '';
    const adultCount: string = url.searchParams.get('adult') ?? '';
    const infantCount: string = url.searchParams.get('infants') ?? '';
    const date: string = url.searchParams.get('date') ?? '';

    try {
        const detail = await getProduct(vendorSlug, productSlug);
        const vendor = await getVendor();
        const listTicket = await getListTicket(vendorSlug, productSlug, childrenCount, adultCount, infantCount, date);

        return {
            maxage: 3600,
            detail,
            vendor,
            listTicket,
            childrenCount: childrenCount,
            adultCount: adultCount,
            infantCount: infantCount,
            date: date,
        };
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
};
