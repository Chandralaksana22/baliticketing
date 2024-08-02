import { getTicketVendor } from '$lib/api/ticket';
import { getPopularProduct, getProductVendor, getVendor, getVendorDetail } from '$lib/api/vendor';
import { getDataAnalitic } from '$lib/api/analytic';
import type { PageServerLoad } from './$types';
import axios from 'axios';
import UAParser from 'ua-parser-js';

export const load = (async ({ request, params, url }) => {
    const userAgent = request.headers.get('user-agent');
    const parser = new UAParser(userAgent);
    const ua = parser.getResult();

    let ip_address: string = '';
    let country: string = '';
    let device: string = '';
    let os: string = '';
    let browser: string = '';
    let urlweb = url.origin;
    let vendorweb: string = '';

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

    try {
        // Fetch vendor data from external API
        const vendorResponse = await axios.get(`https://main.tiketxplorer.com/api/v1/get-product?slug=${params.vendorSlug}`);
        vendorweb = vendorResponse.data.vendor_id;
    } catch (error) {
        console.error('Error fetching vendor data:', error);
    }

    // Logging the information
    console.log('IP Address:', ip_address);
    console.log('Country:', country);
    console.log('Device:', device);
    console.log('OS:', os);
    console.log('Browser:', browser);
    console.log('URL:', urlweb);
    console.log('Vendor ID:', vendorweb);

    const [
        vendor,
        detail,
        product,
        popularProduct,
        listTicket,
        analytic
    ] = await Promise.all([
        getVendor(),
        getVendorDetail(params.vendorSlug),
        getProductVendor(params.vendorSlug),
        getPopularProduct(params.vendorSlug),
        getTicketVendor(params.vendorSlug),
        getDataAnalitic(vendorweb, ip_address, country, device, os, browser, urlweb)
    ]);

    return {
        maxage: 3600,
        vendor,
        detail,
        product,
        popularProduct,
        listTicket,
        analytic
    };
}) satisfies PageServerLoad;
