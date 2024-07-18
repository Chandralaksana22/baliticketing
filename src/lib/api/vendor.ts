import apiClient from "../helpers/axios"

export async function getVendor() {
	try {
		const resp = await apiClient.get(
			`/get-list-vendor`
		);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getBaliZooPopular() {
	try {
		const resp = await apiClient.get(
			`/get-product?slug=bali-zoo`
		);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}

export async function getBaliBirdParkPopular() {
	try {
		const resp = await apiClient.get(
			`/get-popular-product-2?slug=bali-bird-park`
		);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}

export async function getBaliFarmPopular() {
	try {
		const resp = await apiClient.get(
			`/get-popular-product-2?slug=bali-farm-house`
		);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getBaliSafariPopular() {
	try {
		const resp = await apiClient.get(
			`/get-popular-product-2?slug=bali-safari`
		);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getVendorDetail(slug: any,) {
	try {
		const resp = await apiClient.get(`/get-detail-vendor?slug=${slug}`);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getProductVendor(slug: any,) {
	try {
		const resp = await apiClient.get(`/get-product?slug=${slug}`);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}
export async function getPopularProduct(slug: any,) {
	try {
		const resp = await apiClient.get(`/get-popular-product-2?slug=${slug}`);
		return resp.data;
	} catch (error) {
		console.log(error);
	}
}
