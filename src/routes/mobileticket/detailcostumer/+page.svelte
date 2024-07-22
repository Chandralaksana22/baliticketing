<script lang="ts">
	import { onMount } from 'svelte';
	import CryptoJS from 'crypto-js';
	import axios from 'axios';
	import type { PageServerData } from './$types';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	export let data: PageServerData;
	let vendor = data?.vendor
	let decryptedData: any;
	let countries = '';
	let firstname = '';
	let lastname = '';
	let phone = '';
	let email = '';
	let terms = 'on';
	let selectedCountry = '';
	let loading = false;
	let showConfirmation = false;
	onMount(async () => {
		try {
			const response = await axios.get('https://countriesnow.space/api/v0.1/countries/iso');
			countries = response.data.data;
		} catch (error) {
			console.error('Error fetching countries:', error);
		}
	});
	function decryptData() {
		const encryptedData = sessionStorage.getItem('encryptedData');
		const secretKey = sessionStorage.getItem('key');

		if (encryptedData && secretKey) {
			try {
				const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
				const decryptedString = bytes.toString(CryptoJS.enc.Utf8);
				decryptedData = JSON.parse(decryptedString);
			} catch (error) {
				console.error('Error decrypting data:', error);
			}
		} else {
			console.error('No encrypted data found or secret key missing.');
		}
	}

	onMount(() => {
		decryptData();
	});
	async function handleSubmit(event) {
		event.preventDefault();
		loading = true;
		const url = `https://main.tiketxplorer.com/api/v1/send-form?adult=${decryptedData?.adultCount}&children=${decryptedData?.childrenCount}&infant=${decryptedData?.infantCount}&total_price=${decryptedData?.totalPrice}&adult_price=${decryptedData?.decryptedTicket.adult_price}&children_price=${decryptedData?.decryptedTicket.children_price}&infant_price=${decryptedData?.decryptedTicket.infant_price}&total_adult_price=${decryptedData?.adultCount}&total_children_price=${decryptedData.childrenCount}&total_infant_price=${decryptedData.infantCount}&arrival=${decryptedData.date}&firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${phone}&country=${selectedCountry}&terms=${terms}&id=${decryptedData?.decryptedTicket.id}&product_id=${decryptedData.decryptedTicket.product_id}&vendor_id=${decryptedData.decryptedTicket.id}&slug=${decryptedData?.decryptedTicket.vendor.slug}`;

		try {
			const response = await axios.post(url);

			if (response.data.response) {
				const match = response.data.response.match(/window\.location\.href = "(.*?)";/);
				if (match && match[1]) {
					const redirectUrl = match[1];
					window.location.href = redirectUrl;
					loading = false;
					showConfirmation = true;
				} else {
					console.error('Redirect URL not found in response:', response.data.response);
				}
			} else {
				console.error('Unexpected response:', response.data);
			}
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	}
</script>
<Navbar data={vendor}/>
<section class="bg-cover bg-[url('/images/bg-desktop.webp')]">
	<div
		class="bg-center bg-cover h-[100] bg-no-repeat"
		style="background-image: url('/images/herocontact.webp');"
	>
		<div class="h-[25vh] lg:h-[50vh] px-5 lg:px-10 flex items-center">
			<h1
				class="mb-4 boldfont text-lg text-center mx-auto tracking-tight leading-none text-white md:text-xl lg:text-4xl"
			>
				Contact Us
			</h1>
		</div>
	</div>
	<div class="container mx-auto px-5 lg:px-20 pb-20">
		<div
			class="bg-white mt-[-10%] p-5 lg:p-10 rounded-xl shadow-xl lg:py-5 grid lg:grid-cols-2 gap-8 lg:gap-16"
		>
			<div>
				<div class="w-full lg:max-w-xl">
					<h2 class="text-2xl boldfont font-bold text-blue dark:text-white">Detaiil Costumer</h2>
					<form class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-3" on:submit={handleSubmit}>
						<div>
							<label
								for="firstname"
								class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
								>First Name*</label
							>
							<input
								type="text"
								id="firstname"
								name="firstname"
								bind:value={firstname}
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
								placeholder="Green"
								required
							/>
						</div>
						<div>
							<label
								for="lastname"
								class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
								>Last Name*</label
							>
							<input
								type="text"
								id="lastname"
								name="lastname"
								bind:value={lastname}
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
								placeholder="Green"
								required
							/>
						</div>
						<div class="sm:col-span-2">
							<div class="mb-2 flex items-center gap-2">
								<label
									for="select-country-input-3"
									class="block text-sm font-medium text-gray-900 dark:text-white">Country</label
								>
							</div>
							<select
								id="select-country-input-3"
								name="country"
								bind:value={selectedCountry}
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
							>
								{#each countries as country}
									<option value={country.iso2}>{country.name}</option>
								{/each}
							</select>
						</div>
						<div class="sm:col-span-2">
							<label
								for="phone-input-3"
								class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
								>Phone Number*</label
							>
							<input
								type="text"
								id="phone-input"
								name="phone"
								bind:value={phone}
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
								placeholder="123-456-7890"
								required
							/>
						</div>
						<div class="sm:col-span-2">
							<label
								for="email"
								class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Email</label
							>
							<input
								type="email"
								id="email"
								name="email"
								bind:value={email}
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
								placeholder="name@guirez.com"
								required
							/>
						</div>
						<div class="flex items-start mb-5">
							<div class="flex items-center h-5">
								<input
									id="terms"
									type="checkbox"
									bind:checked={terms}
									class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
									required
								/>
							</div>
							<label for="terms" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
								>I agree with the <a
									href="#"
									class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a
								></label
							>
						</div>
						<div class="sm:col-span-2">
							<button
								type="submit"
								class="bg-blue flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
							>
								Go to Payment
							</button>
						</div>
					</form>
				</div>
			</div>
			<div>
				<h1 class="text-2xl boldfont font-bold text-blue dark:text-white">Detail Payment</h1>
				<div class="mt-5 w-full space-y-6 sm:mt-8 lg:mt-5 lg:max-w-xs xl:max-w-md">
					<div class="flow-root">
						{#if decryptedData}
							<div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
								<dl class="flex items-center justify-between gap-4 py-3">
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400">Ticket</dt>
									<dd class="text-base font-medium text-gray-900 dark:text-white">
										{decryptedData?.detail?.name}
									</dd>
								</dl>
								<dl class="flex items-center justify-between gap-4 py-3">
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400">Occupancy</dt>
									<dd class="text-base font-medium text-gray-500">
										{decryptedData.adultCount} Adult, {decryptedData.childrenCount} Children, {decryptedData.infantCount}
										Infant
									</dd>
								</dl>
								<dl class="flex items-center justify-between gap-4 py-3">
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400">Date</dt>
									<dd class="text-base font-medium text-gray-900 dark:text-white">
										{decryptedData.date}
									</dd>
								</dl>
								<dl class="flex items-center justify-between gap-4 py-3">
									<dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
									<dd class="text-base font-bold text-gray-900 dark:text-white">
										Rp {decryptedData?.totalPrice}
									</dd>
								</dl>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- <form method="POST"></form>
{#if decryptedData}
	<p>Decrypted Ticket: {decryptedData.decryptedTicket}</p>
	<p>Detail: {decryptedData.detail}</p>
	<p>Adult Count: {decryptedData.adultCount}</p>
	<p>Children Count: {decryptedData.childrenCount}</p>
	<p>Infant Count: {decryptedData.infantCount}</p>
	<p>Date: {decryptedData.date}</p>
{:else}
	<p>Data not available.</p>
{/if} -->
