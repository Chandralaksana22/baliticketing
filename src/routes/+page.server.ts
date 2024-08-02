import type { PageServerLoad } from './$types';
import { getVendor, getBaliFarmPopular, getBaliZooPopular, getBaliBirdParkPopular, getBaliSafariPopular } from '$lib/api/vendor';
import { getDataAnalitic } from '$lib/api/analytic';
import axios from 'axios';
import UAParser from 'ua-parser-js';

export const load = (async ({ request, url }) => {
    const userAgent = request.headers.get('user-agent');
    const parser = new UAParser(userAgent);
    const ua = parser.getResult();

    let ip_address: string = '';
    let country: string = '';
    let device: string = '';
    let os: string = '';
    let browser: string = '';
    let urlweb = url.origin;

    // Determine device type
    if (ua.device.type === 'tablet') {
        device = 'Tablet';
    } else if (ua.device.type === 'mobile') {
        device = 'Mobile';
    } else {
        device = 'Desktop';
    }

    // Get OS and browser information
    os = `${ua.os.name}`;
    browser = `${ua.browser.name}`;

    try {
        // Fetch IP and country information
        const ipResponse = await axios.get('https://ipapi.co/json/');
        ip_address = ipResponse.data.ip;
        country = ipResponse.data.country_name;
    } catch (error) {
        console.error('Error fetching IP data:', error);
    }

    const [
        vendor,
        balifarm,
        balizoo,
        balibird,
        balisafari,
        analytic
    ] = await Promise.all([
        getVendor(),
        getBaliFarmPopular(),
        getBaliZooPopular(),
        getBaliBirdParkPopular(),
        getBaliSafariPopular(),
        getDataAnalitic('', ip_address, country, device, os, browser, urlweb)
    ]);

    return {
        maxage: 3600,
        vendor,
        balifarm,
        balizoo,
        balibird,
        balisafari,
        analytic
    };
}) satisfies PageServerLoad;
