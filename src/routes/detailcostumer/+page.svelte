<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { goto } from '$app/navigation';
	import type { PageServerData } from './$types';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';
	export let data: PageServerData;
	let vendor = data?.vendor;
	let firstname = '';
	let lastname = '';
	let phone = '';
	let email = '';
	let terms = 'on';
	let countries = '';
	let selectedCountry: string = 'Indonesia';
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

	let selectedTicket: any;
	let adultCount: any;
	let childrenCount: any;
	let infantCount: any;
	let date: any;
	let totalPrice: any;

	onMount(() => {
		selectedTicket = JSON.parse(sessionStorage.getItem('selectedTicket')) || {};
		adultCount = parseInt(sessionStorage.getItem('adultCount'), 10) || 0;
		childrenCount = parseInt(sessionStorage.getItem('childrenCount'), 10) || 0;
		infantCount = parseInt(sessionStorage.getItem('infantCount'), 10) || 0;
		date = sessionStorage.getItem('date') || '';
		if (!selectedTicket || Object.keys(selectedTicket).length === 0) {
			goto('/ticket', { replace: true });
		} else {
			const adultPrice = selectedTicket.adult_price || 0;
			const childrenPrice = selectedTicket.children_price || 0;
			const infantPrice = selectedTicket.infant_price || 0;
			const discountPercentage = selectedTicket.discount_percentage || 0;

			// Calculate total prices with discount
			const totalAdultPrice = adultPrice * adultCount * (1 - discountPercentage / 100);
			const totalChildrenPrice = childrenPrice * childrenCount * (1 - discountPercentage / 100);
			const totalInfantPrice = infantPrice * infantCount * (1 - discountPercentage / 100);

			totalPrice = (totalAdultPrice + totalChildrenPrice + totalInfantPrice).toFixed(2);
		}
	});

	async function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault();
		loading = true;
		const url = `https://main.tiketxplorer.com/api/v1/send-form?adult=${adultCount}&children=${childrenCount}&infant=${infantCount}&total_price=${totalPrice}&adult_price=${selectedTicket.adult_price}&children_price=${selectedTicket.children_price}&infant_price=${selectedTicket.infant_price}&total_adult_price=${(selectedTicket.adult_price * adultCount * (1 - (selectedTicket.discount_percentage || 0) / 100)).toFixed(2)}&total_children_price=${(selectedTicket.children_price * childrenCount * (1 - (selectedTicket.discount_percentage || 0) / 100)).toFixed(2)}&total_infant_price=${(selectedTicket.infant_price * infantCount * (1 - (selectedTicket.discount_percentage || 0) / 100)).toFixed(2)}&arrival=${date}&firstname=${firstname}&lastname=${lastname}&email=${email}&phone=${phone}&country=${selectedCountry}&terms=${terms}&id=${selectedTicket.id}&product_id=${selectedTicket.product_id}&vendor_id=${selectedTicket.vendor_id}&slug=${selectedTicket?.vendor?.slug}`;

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

<Navbar data={vendor} />
<section class="bg-cover bg-[url('/images/bg-desktop.webp')]">
	<div
		class="bg-center bg-cover h-[100] bg-no-repeat"
		style="background-image: url('/images/herocontact.webp');"
	>
		<div class="h-[25vh] lg:h-[50vh] px-5 lg:px-10 flex items-center">
			<h1
				class="mb-4 boldfont text-lg text-center mx-auto tracking-tight leading-none text-white md:text-xl lg:text-4xl"
			>
				Detail Costumer
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
									<option value={country?.name}>{country?.name}</option>
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
								>I agree with the 
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a
									href="#"
									class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a
								></label
							>
						</div>
						<div class="sm:col-span-2">
							{#if showConfirmation}
								<div class="confirmation-message mb-5">
									<button
										disabled
										type="button"
										class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-transparent rounded-lg border-none focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
									>
										<svg
											aria-hidden="true"
											role="status"
											class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="#1C64F2"
											/>
										</svg>
										You will be redirected to the payment page shortly...
									</button>
								</div>
							{/if}
							{#if loading}
								<div class="confirmation-message mb-5">
									<button
										disabled
										type="button"
										class="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-transparent rounded-lg border-none focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
									>
										<svg
											aria-hidden="true"
											role="status"
											class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="#1C64F2"
											/>
										</svg>
										Loading...
									</button>
								</div>
							{/if}

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
						{#if selectedTicket}
							<div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
								<dl class="flex items-center justify-between gap-4 py-3">
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400">Ticket</dt>
									<dd class="text-base font-medium text-gray-900 dark:text-white">
										{selectedTicket?.name}
									</dd>
								</dl>
								<dl class="flex items-center justify-between gap-4 py-3">
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400">Occupancy</dt>
									<dd class="text-base font-medium text-gray-500">
										{adultCount} Adult, {childrenCount} Children, {infantCount} Infant
									</dd>
								</dl>
								<dl class="flex items-center justify-between gap-4 py-3">
									<dt class="text-base font-normal text-gray-500 dark:text-gray-400">Date</dt>
									<dd class="text-base font-medium text-gray-900 dark:text-white">
										{date}
									</dd>
								</dl>
								<dl class="flex items-center justify-between gap-4 py-3">
									<dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
									<dd class="text-base font-bold text-gray-900 dark:text-white">
										{new Intl.NumberFormat('id-ID', {
											style: 'currency',
											currency: 'IDR',
											minimumFractionDigits: 0,
											maximumFractionDigits: 0
										}).format(totalPrice)}
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
<Footer data={vendor}/>