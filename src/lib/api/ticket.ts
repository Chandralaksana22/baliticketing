import apiClient from "../helpers/axios"

export async function getTicket(keyword: any) {
	try {
		const resp = await apiClient.get(
			`/get-all-ticket?keyword=${keyword}`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getTicketVendor(vendorSlug: any) {
	try {
		const resp = await apiClient.get(
			`/get-all-ticket-by-vendor?vendor=${vendorSlug}`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getProduct(vendorSlug: any, productSlug:any) {
	try {
		const resp = await apiClient.get(
			`/get-detail-product?vendor=${vendorSlug}&product=${productSlug}`
		);
		return resp.data
	} catch (error) {
		console.log(error);
	}
}
export async function getListTicket(vendorSlug: any, productSlug:any, children:any, adults:any, infants:any, date:any) {
	try {
		const resp = await apiClient.get(
			`/get-form-list-ticket?vendor=${vendorSlug}&product=${productSlug}&children=${children}&adult=${adults}&infant=${infants}&date=${date}`
		);
		return resp.data.data;
	} catch (error) {
		console.log(error);
	}
}
export async function postPayment(
    adultCount: any, childrenCount: any, infantCount: any, totalPrice: any,
    adult_price: any, children_price: any, infant_price: any, total_adult: any,
    total_children: any, total_infant: any, date: any, firstname: any, lastname: any,
    email: any, phone: any, selectedCountry: any, terms: any, id: any, product_id: any,
    vendor_id: any, slug: any
) {
    try {
        const resp = await apiClient.get(
            `send-form/adult=${adultCount}&children=${childrenCount}&infant=${infantCount}&total_price=${totalPrice}&adult_price=${adult_price}&children_price=${children_price}&infant_price=${infant_price}&total_adult_price=${total_adult}&total_children_price=${total_children}&total_infant_price=${total_infant}&arrival=${date}&firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${phone}&country=${selectedCountry}&terms=${terms}&id=${id}&product_id=${product_id}&vendor_id=${vendor_id}&slug=${slug}`
        );
        return resp.data.data;
    } catch (error) {
        console.error('Error posting payment:', error);
        throw error; 
    }
}