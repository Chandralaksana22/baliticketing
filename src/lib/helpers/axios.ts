import axios from 'axios';

const BASE_URL = "https://main.tiketxplorer.com/api/v1";

const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		'cache-control': 'public, max-age=3600',
		'Access-Control-Allow-Origin': '*',
		'Accept-Encoding': 'gzip, compress, br'
	}
});

export default apiClient;
