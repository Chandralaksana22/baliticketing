<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { writable } from 'svelte/store';
	import type { PageServerData } from './$types';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';
	export let data: PageServerData;
	let vendor = data?.vendor;
	let countries = '';
	let selectedCountry: string = 'Indonesia';

	onMount(async () => {
		try {
			const response = await axios.get('https://countriesnow.space/api/v0.1/countries/iso');
			countries = response.data.data;
		} catch (error) {
			console.error('Error fetching countries:', error);
		}
	});
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
					<h1 class="text-2xl boldfont font-bold text-blue dark:text-white">Inquiry Form</h1>
					<form class="mt-8 space-y-6" action="#">
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
							<div>
								<label
									for="first-name"
									class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
									>First Name</label
								>
								<input
									type="text"
									id="first-name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
									placeholder="First Name"
									required
								/>
							</div>
							<div>
								<label
									for="last-name"
									class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
									>Last Name</label
								>
								<input
									type="text"
									id="last-name"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
									placeholder="Last Name"
									required
								/>
							</div>
						</div>
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
							<div>
								<label
									for="email"
									class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Email</label
								>
								<input
									type="email"
									id="email"
									class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
									placeholder="Email Address"
									required
								/>
							</div>
							<div>
								<label
									for="countries"
									class="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Country</label
								>
								<select
									id="select-country-input-3"
									name="country"
									bind:value={selectedCountry}
									class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
								>
									{#each countries as country}
										<option value={country?.name}>{country?.name}</option>
									{/each}
								</select>
							</div>
						</div>
						<label for="message" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
							>What can we help you with?</label
						>
						<textarea
							id="message"
							rows="4"
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full"
							placeholder="Leave your message"
						></textarea>

						<button
							type="submit"
							class="px-5 py-2 float-end text-base font-medium text-center text-white bg-blue rounded-lg hover:bg-[#3a7e9b]"
						>
							Submit
						</button>
					</form>
				</div>
			</div>
			<div>
				<h1 class="text-2xl boldfont font-bold text-blue dark:text-white">OUR OFFICE</h1>
				<div class="mt-5">
					<div class="flex items-center gap-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M12 1.5C9.81273 1.50248 7.71575 2.37247 6.16911 3.91911C4.62247 5.46575 3.75248 7.56273 3.75 9.75C3.75 16.8094 11.25 22.1409 11.5697 22.3641C11.6958 22.4524 11.846 22.4998 12 22.4998C12.154 22.4998 12.3042 22.4524 12.4303 22.3641C12.75 22.1409 20.25 16.8094 20.25 9.75C20.2475 7.56273 19.3775 5.46575 17.8309 3.91911C16.2843 2.37247 14.1873 1.50248 12 1.5ZM12 6.75C12.5933 6.75 13.1734 6.92595 13.6667 7.25559C14.1601 7.58524 14.5446 8.05377 14.7716 8.60195C14.9987 9.15013 15.0581 9.75333 14.9424 10.3353C14.8266 10.9172 14.5409 11.4518 14.1213 11.8713C13.7018 12.2909 13.1672 12.5766 12.5853 12.6924C12.0033 12.8081 11.4001 12.7487 10.8519 12.5216C10.3038 12.2946 9.83524 11.9101 9.50559 11.4167C9.17595 10.9234 9 10.3433 9 9.75C9 8.95435 9.31607 8.19129 9.87868 7.62868C10.4413 7.06607 11.2044 6.75 12 6.75Z"
								fill="#161616"
							></path>
						</svg>
						<p>Regus Benoa Square, Jl. Bypass Ngurah Rai No. 21A, Badung Regency, Bali</p>
					</div>
					<div class="flex items-center mt-3 gap-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM20.25 18H3.75V6.95531L11.4928 14.0531C11.6312 14.1801 11.8122 14.2506 12 14.2506C12.1878 14.2506 12.3688 14.1801 12.5072 14.0531L20.25 6.95531V18Z"
								fill="#161616"
							/>
						</svg>
						<p>baliticketservice@gmail.com</p>
					</div>
					<div class="flex items-center mt-3 gap-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M21.7388 16.4137C21.5716 17.6841 20.9477 18.8501 19.9837 19.6941C19.0196 20.5381 17.7813 21.0023 16.5 21C9.05626 21 3.00001 14.9438 3.00001 7.5C2.99771 6.21871 3.4619 4.9804 4.30588 4.01634C5.14986 3.05228 6.31592 2.42841 7.58626 2.26125C7.9075 2.22203 8.2328 2.28775 8.51362 2.4486C8.79444 2.60945 9.0157 2.85681 9.14438 3.15375L11.1244 7.57406V7.58531C11.2229 7.81261 11.2636 8.06078 11.2428 8.30763C11.222 8.55449 11.1404 8.79236 11.0053 9C10.9884 9.02531 10.9706 9.04875 10.9519 9.07219L9.00001 11.3859C9.7022 12.8128 11.1947 14.2922 12.6403 14.9963L14.9222 13.0547C14.9446 13.0359 14.9681 13.0183 14.9925 13.0022C15.2 12.8638 15.4387 12.7794 15.687 12.7564C15.9353 12.7335 16.1854 12.7729 16.4147 12.8709L16.4269 12.8766L20.8434 14.8556C21.1409 14.9838 21.3889 15.2049 21.5503 15.4858C21.7116 15.7666 21.7778 16.0922 21.7388 16.4137Z"
								fill="#161616"
							/>
						</svg>
						<p>(+62) 0888 8888 8888</p>
					</div>
					<iframe
						class="rounded-xl w-full mt-4 h-[38vh] shadow-lg"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8548075054587!2d115.18508327440559!3d-8.79970839125273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244a6af1e35b9%3A0xc77086c8ff1d8d9a!2sMindiMedia%20Indonesia%20-%20Digital%20Marketing%20Agency!5e0!3m2!1sid!2sid!4v1715576916682!5m2!1sid!2sid"
						style="border:0;"
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</section>
<Footer data={vendor} />
