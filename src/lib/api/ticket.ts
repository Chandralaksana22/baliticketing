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
