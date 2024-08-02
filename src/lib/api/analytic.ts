import apiClient from "../helpers/axios"

export async function getDataAnalitic(vendorSlug: any, ip_address:any, country:any, device:any, os:any, browser:any, urlweb:any) {
	try {
		const resp = await apiClient.get(
			`/visitor?vendor=${vendorSlug}&ip_address=${ip_address}&country=${country}&device=${device}&os=${os}&browser=${browser}&url=${urlweb}`
		);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}
