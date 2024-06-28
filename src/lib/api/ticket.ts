import apiClient from "../helpers/axios"

export async function getTicket(keyword: any) {
	try {
		const resp = await apiClient.get(
			`/get-all-ticket?keyword=${keyword}`
		);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}
