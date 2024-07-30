<script lang="ts">
	import { goto } from '$app/navigation';
	import { Drawer, Button, CloseButton, A } from 'flowbite-svelte';
	import { sineIn } from 'svelte/easing';

	let defaultModalInclusion = false;
	let defaultModal = false;
	let hidden8 = true;
	let transitionParamsBottom = {
		y: 320,
		duration: 200,
		easing: sineIn
	};
	let inclusionItems = [];
	import TicketInformation from '$lib/components/Section/Ticket/TicketInformation.svelte';
	import { writable } from 'svelte/store';
	import CryptoJS from 'crypto-js';
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import ImageDetail from '$lib/components/Section/Ticket/ImageDetail.svelte';
	import TicketAbout from '$lib/components/Section/Ticket/TicketAbout.svelte';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';
	export let data: PageServerData;
	let size;
	let detail = data?.detail;
	let vendor = data?.vendor;
	let adultCount = data?.adultCount || 1;
	let childrenCount = data?.childrenCount || 0;
	let infantCount = data?.infantCount || 0;
	let date = data?.date;
	let openAccordionIndex = 0;
	let selectedTicket: item | null = null;
	let showSummary = false;
	const decryptedTicket = writable<any>(null);
	function selectTicket(ticket: item) {
		selectedTicket = ticket;
		showSummary = true;
	}

	function unselectTicket() {
		selectedTicket = null;
		showSummary = false;
	}

	function toggleAccordion(index) {
		if (openAccordionIndex === index) {
			openAccordionIndex = -1;
		} else {
			openAccordionIndex = index;
		}
	}
	function toggleAccordionDetail(id: string) {
		const accordionBody = document.getElementById(id);
		if (accordionBody) {
			accordionBody.classList.toggle('hidden');
		}
	}
	function increment(type: 'adult' | 'children' | 'infant') {
		if (type === 'adult') {
			adultCount++;
		} else if (type === 'children') {
			childrenCount++;
		} else if (type === 'infant') {
			infantCount++;
		}
	}

	function decrement(type: 'adult' | 'children' | 'infant') {
		if (type === 'adult' && adultCount > 1) {
			adultCount--;
		} else if (type === 'children' && childrenCount > 0) {
			childrenCount--;
		} else if (type === 'infant' && infantCount > 0) {
			infantCount--;
		}
	}

	function convertTo12HourFormat(time) {
		const [hours, minutes] = time.split(':');
		const hour = parseInt(hours, 10);
		const suffix = hour >= 12 ? 'PM' : 'AM';
		const adjustedHour = hour % 12 || 12;
		return `${adjustedHour}:${minutes} ${suffix}`;
	}
	onMount(() => {
		const secretKey = sessionStorage.getItem('key');
		const encryptedData = sessionStorage.getItem('item');

		if (secretKey && encryptedData) {
			try {
				const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
				const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
				decryptedTicket.set(decryptedData);
				inclusionItems = decryptedData.items ? decryptedData.items.inclusion : [];
			} catch (e) {
				decryptedTicket.set(null);
			}
		} else {
			decryptedTicket.set(null);
		}
	});
	function handleSubmit(event) {
		event.preventDefault();
		const totalPrice =
			(adultCount * $decryptedTicket?.adult_price +
				childrenCount * $decryptedTicket?.children_price +
				infantCount * $decryptedTicket?.infant_price) *
			(1 - $decryptedTicket?.discount_percentage / 100);
		// Simpan data ke local storage
		localStorage.setItem('selectedTicket', JSON.stringify(selectedTicket));
		localStorage.setItem('adultCount', adultCount.toString());
		localStorage.setItem('childrenCount', childrenCount.toString());
		localStorage.setItem('infantCount', infantCount.toString());
		localStorage.setItem('date', date);

		// Enkripsi data sebelum disimpan ke session storage
		const secretKey = sessionStorage.getItem('key');
		const dataToEncrypt = {
			decryptedTicket: $decryptedTicket,
			detail,
			adultCount,
			childrenCount,
			infantCount,
			date,
			totalPrice
		};
		const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(dataToEncrypt), secretKey).toString();
		sessionStorage.setItem('encryptedData', encryptedData);

		// Navigasi ke halaman detailcostumer
		goto('/mobileticket/detailcostumer');
	}
</script>

<svelte:head>
	<title>
		{detail?.name} | TiketXplorer
	</title>
</svelte:head>
<Navbar data={vendor} />

<div
	class="bg-center bg-cover h-[100] bg-no-repeat bg-gray-600 bg-blend-multiply"
	style="background-image: url({detail?.images[0]?.path});"
>
	<div class="h-[25vh] lg:h-[50vh] px-5 lg:px-10 flex items-center">
		<h1
			class="mb-4 boldfont text-lg text-center mx-auto tracking-tight leading-none text-white lg:text-yellow-300 md:text-xl lg:text-4xl"
		>
			<span class="boldfont hidden lg:contents text-white">Ticket > </span> Ticket Details
		</h1>
	</div>
</div>
<div class="bg-white">
	<div class="container mx-auto px-5 lg:px-20">
		<div class="my-10">
			<h1 class="boldfont text-lg lg:text-2xl">{$decryptedTicket?.name}</h1>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<ImageDetail data={detail} />
		<div class="grid lg:grid-cols-3 py-10 gap-8">
			<div class="col-span-2">
				<p>{@html detail?.description}</p>
				<h1 class="boldfont my-5">About This Ticket</h1>
				<TicketAbout />
				<div class="mt-5">
					<div class="block lg:hidden">
						<div class="border border-sky-500 rounded-xl">
							<h2>
								<button
									type="button"
									class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
									aria-controls="accordion-collapse-body-1"
									on:click={() => toggleAccordionDetail('accordion-collapse-body-1')}
								>
									<span>Highlight</span>
									<svg
										data-accordion-icon
										class="w-3 h-3 rotate-180 shrink-0"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5 5 1 1 5"
										/>
									</svg>
								</button>
							</h2>
							<div id="accordion-collapse-body-1" class="hidden">
								<div class="p-5">
									<p class="text-sm">
										{@html detail?.highlight}
									</p>
								</div>
							</div>
						</div>
						<div class="border border-sky-500 rounded-xl mt-2">
							<h2>
								<button
									type="button"
									class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
									aria-controls="accordion-collapse-body-2"
									on:click={() => toggleAccordionDetail('accordion-collapse-body-2')}
								>
									<span>Inclusion</span>
									<svg
										data-accordion-icon
										class="w-3 h-3 rotate-180 shrink-0"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5 5 1 1 5"
										/>
									</svg>
								</button>
							</h2>
							<div id="accordion-collapse-body-2" class="hidden">
								<div class="p-5">
									<ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
										{#if $decryptedTicket && $decryptedTicket.inclusion}
											{#each $decryptedTicket.inclusion as item}
												<li class="flex items-center space-x-3 rtl:space-x-reverse">
													<svg
														class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
														aria-hidden="true"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 16 12"
													>
														<path
															stroke="currentColor"
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M1 5.917 5.724 10.5 15 1.5"
														/>
													</svg>
													<span>{item.item}</span>
												</li>
											{/each}
										{:else}
											<p>No inclusion items available.</p>
										{/if}
									</ul>
								</div>
							</div>
						</div>
						<div class="border border-sky-500 rounded-xl mt-2">
							<h2>
								<button
									type="button"
									class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
									aria-controls="accordion-collapse-body-3"
									on:click={() => toggleAccordionDetail('accordion-collapse-body-3')}
								>
									<span>Facilities</span>
									<svg
										data-accordion-icon
										class="w-3 h-3 rotate-180 shrink-0"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5 5 1 1 5"
										/>
									</svg>
								</button>
							</h2>
							<div id="accordion-collapse-body-3" class="hidden">
								<div class="p-5">
									<div class="grid grid-cols-3 gap-4">
										{#each detail?.facilities as facility}
											<div class="flex flex-col items-center justify-center p-4">
												<img src={facility.path} alt={facility.title} class="w-8 h-8 mb-2" />
												<p class="text-sm">{facility.title}</p>
											</div>
										{/each}
									</div>
								</div>
							</div>
						</div>
						<div class="border border-sky-500 rounded-xl mt-2">
							<h2>
								<button
									type="button"
									class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
									aria-controls="accordion-collapse-body-4"
									on:click={() => toggleAccordionDetail('accordion-collapse-body-4')}
								>
									<span>Location</span>
									<svg
										data-accordion-icon
										class="w-3 h-3 rotate-180 shrink-0"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 5 5 1 1 5"
										/>
									</svg>
								</button>
							</h2>
							<div id="accordion-collapse-body-4" class="hidden">
								<div class="p-5">
									<div class="flex mb-5">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
										>
											<path
												d="M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 22.4125 15 29.5213 15.4263 29.8188C15.5944 29.9365 15.7947 29.9997 16 29.9997C16.2053 29.9997 16.4056 29.9365 16.5737 29.8188C17 29.5213 27 22.4125 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM16 9C16.7911 9 17.5645 9.2346 18.2223 9.67412C18.8801 10.1136 19.3928 10.7384 19.6955 11.4693C19.9983 12.2002 20.0775 13.0044 19.9231 13.7804C19.7688 14.5563 19.3878 15.269 18.8284 15.8284C18.269 16.3878 17.5563 16.7688 16.7804 16.9231C16.0044 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1136 15.8801 12.6741 15.2223C12.2346 14.5645 12 13.7911 12 13C12 11.9391 12.4214 10.9217 13.1716 10.1716C13.9217 9.42143 14.9391 9 16 9Z"
												fill="#161616"
											></path>
										</svg>
										<p class="ms-2">
											{detail?.vendor?.address}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="fixed bottom-[8%] z-[99] left-0 right-0 bg-white p-5">
						<div class="grid grid-cols-2 gap-4">
							<div>
								<h1 class="text-xs font-bold text-black">Ticket Start From</h1>
								<p class="text-lg font-bold text-blue">
									IDR
									{new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR',
										minimumFractionDigits: 0,
										maximumFractionDigits: 0
									}).format($decryptedTicket?.adult_price)}
								</p>
							</div>
							<button
								class="text-white bg-blue rounded-xl text-white font-semibold text-sm"
								type="button"
								on:click={() => (hidden8 = false)}
							>
								Book Ticket
							</button>
							<Drawer
								placement="bottom"
								width="w-full"
								transitionType="fly"
								transitionParams={transitionParamsBottom}
								bind:hidden={hidden8}
								id="sidebar8"
							>
								<div class="flex items-center">
									<h5 id="drawer-bottom-label" class="pt-10 mb-3 text-base font-semibold text-blue">
										Ticket Summary
									</h5>
									<CloseButton on:click={() => (hidden8 = true)} class="mb-4 dark:text-white" />
								</div>
								<div class="py-4">
									<p class="text-gray-600 text-xs">Ticket Name</p>
									<p class="text-black text-md font-bold">{$decryptedTicket?.name}</p>
								</div>
								<form on:submit={handleSubmit}>
									<div class="p-4">
										<div class="relative mt-5">
											<div
												class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
											>
												<svg
													class="w-4 h-4 text-gray-500 dark:text-gray-400"
													aria-hidden="true"
													xmlns="http://www.w3.org/2000/svg"
													fill="currentColor"
													viewBox="0 0 20 20"
													><path
														d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
													></path></svg
												>
											</div>
											<input
												type="date"
												required
												name="date"
												bind:value={date}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input"
												placeholder="Select date"
											/>
										</div>
										<div class="rounded-lg border border-gray-400 mt-5">
											<li class="grid grid-cols-3 lg:grid-cols-2">
												<div class="ps-3 py-4">
													<div class="font-semibold text-gray-900 dark:text-white">Adult</div>
													<div class="text-gray-500 dark:text-gray-400 text-xs">(Age 12-99)</div>
												</div>
												<div class="block lg:hidden py-4">
													<div class="font-semibold text-blue text-sm">
														IDR
														{new Intl.NumberFormat('id-ID', {
															style: 'currency',
															currency: 'IDR',
															minimumFractionDigits: 0,
															maximumFractionDigits: 0
														}).format($decryptedTicket?.adult_price ?? 0)}
													</div>
												</div>
												<div class="pe-3 py-4">
													<div class="flex items-center">
														<button
															class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
															type="button"
															on:click={() => decrement('adult')}
															><span class="sr-only">Quantity button -</span><svg
																class="w-3 h-3"
																aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 18 2"
																><path
																	stroke="currentColor"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M1 1h16"
																></path></svg
															></button
														>
														<div>
															<input
																type="number"
																min="0"
																name="adult"
																class="bg-gray-50 w-9 lg:w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
																bind:value={adultCount}
																placeholder="0"
																required
															/>
														</div>
														<button
															class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
															type="button"
															on:click={() => increment('adult')}
															><span class="sr-only">Quantity button +</span><svg
																class="w-3 h-3"
																aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 18 18"
																><path
																	stroke="currentColor"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 1v16M1 9h16"
																></path></svg
															></button
														>
													</div>
												</div>
											</li>
											<li class="grid grid-cols-3 lg:grid-cols-2">
												<div class="ps-3 py-4">
													<div class="font-semibold text-gray-900 dark:text-white">Children</div>
													<div class="text-gray-500 dark:text-gray-400 text-xs">(Age 2-12)</div>
												</div>
												<div class="block lg:hidden py-4">
													<div class="font-semibold text-blue text-sm">
														IDR
														{new Intl.NumberFormat('id-ID', {
															style: 'currency',
															currency: 'IDR',
															minimumFractionDigits: 0,
															maximumFractionDigits: 0
														}).format($decryptedTicket?.children_price ?? 0)}
													</div>
												</div>
												<div class="pe-3 py-4">
													<div class="flex items-center">
														<button
															class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
															type="button"
															on:click={() => decrement('children')}
															><span class="sr-only">Quantity button -</span><svg
																class="w-3 h-3"
																aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 18 2"
																><path
																	stroke="currentColor"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M1 1h16"
																></path></svg
															></button
														>
														<div>
															<input
																type="number"
																min="0"
																name="children"
																class="bg-gray-50 w-9 lg:w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
																bind:value={childrenCount}
																placeholder="0"
																required
															/>
														</div>
														<button
															class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
															type="button"
															on:click={() => increment('children')}
															><span class="sr-only">Quantity button +</span><svg
																class="w-3 h-3"
																aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 18 18"
																><path
																	stroke="currentColor"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 1v16M1 9h16"
																></path></svg
															></button
														>
													</div>
												</div>
											</li>
											<li class="grid grid-cols-3 lg:grid-cols-2">
												<div class="ps-3 py-4">
													<div class="font-semibold text-gray-900 dark:text-white">Infant</div>
													<div class="text-gray-500 dark:text-gray-400 text-xs">
														(Age 1 and bellow)
													</div>
												</div>
												<div class="block lg:hidden py-4">
													<div class="font-semibold text-blue text-sm">
														IDR
														{new Intl.NumberFormat('id-ID', {
															style: 'currency',
															currency: 'IDR',
															minimumFractionDigits: 0,
															maximumFractionDigits: 0
														}).format($decryptedTicket?.infant_price ?? 0)}
													</div>
												</div>
												<div class="pe-3 py-4">
													<div class="flex items-center">
														<button
															class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
															type="button"
															on:click={() => decrement('infant')}
															><span class="sr-only">Quantity button -</span><svg
																class="w-3 h-3"
																aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 18 2"
																><path
																	stroke="currentColor"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M1 1h16"
																></path></svg
															></button
														>
														<div>
															<input
																type="number"
																min="0"
																name="infants"
																class="bg-gray-50 w-9 lg:w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
																bind:value={infantCount}
																placeholder="0"
																required
															/>
														</div>
														<button
															class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
															type="button"
															on:click={() => increment('infant')}
															><span class="sr-only">Quantity button +</span><svg
																class="w-3 h-3"
																aria-hidden="true"
																xmlns="http://www.w3.org/2000/svg"
																fill="none"
																viewBox="0 0 18 18"
																><path
																	stroke="currentColor"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	d="M9 1v16M1 9h16"
																></path></svg
															></button
														>
													</div>
												</div>
											</li>
										</div>
										<p class="text-gray-600 text-xs mt-5">About This Ticket</p>
										<div class="flex gap-2">
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													><path
														d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM6.75 4.5V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.88968 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5H4.5V4.5H6.75ZM19.5 19.5H4.5V9H19.5V19.5Z"
														fill="#008AC6"
													></path></svg
												>
											</div>
											<div>
												{#if date}
													<h1 class="font-semibold text-xs text-black">
														{new Date(date).toLocaleDateString('en-US', {
															weekday: 'long',
															year: 'numeric',
															month: 'long',
															day: 'numeric'
														})}
													</h1>
												{:else}
													<h1 class="font-semibold text-xs text-black">Choose Date</h1>
												{/if}
											</div>
										</div>
										<div class="flex gap-2">
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													><path
														d="M10.9921 14.805C11.9973 14.1358 12.7605 13.1609 13.1687 12.0244C13.577 10.888 13.6087 9.6503 13.2591 8.49443C12.9095 7.33856 12.1973 6.32587 11.2276 5.60611C10.258 4.88635 9.0825 4.49774 7.87492 4.49774C6.66735 4.49774 5.49184 4.88635 4.52221 5.60611C3.55258 6.32587 2.84032 7.33856 2.49076 8.49443C2.1412 9.6503 2.17288 10.888 2.58114 12.0244C2.9894 13.1609 3.75255 14.1358 4.75774 14.805C2.93945 15.4752 1.38659 16.7153 0.330862 18.3403C0.275377 18.4228 0.236837 18.5155 0.217482 18.613C0.198127 18.7105 0.198344 18.8108 0.218119 18.9082C0.237895 19.0056 0.276835 19.0981 0.332676 19.1804C0.388516 19.2626 0.460144 19.3329 0.543396 19.3872C0.626647 19.4415 0.719861 19.4787 0.81762 19.4967C0.915378 19.5146 1.01573 19.513 1.11285 19.4918C1.20996 19.4706 1.3019 19.4304 1.38332 19.3734C1.46473 19.3164 1.53401 19.2437 1.58711 19.1597C2.2681 18.1123 3.19995 17.2516 4.29802 16.6558C5.3961 16.06 6.62562 15.7479 7.87492 15.7479C9.12423 15.7479 10.3538 16.06 11.4518 16.6558C12.5499 17.2516 13.4817 18.1123 14.1627 19.1597C14.2727 19.3232 14.4427 19.4368 14.6358 19.476C14.8289 19.5152 15.0297 19.4769 15.1947 19.3692C15.3598 19.2616 15.4758 19.0933 15.5178 18.9008C15.5598 18.7082 15.5243 18.5069 15.419 18.3403C14.3633 16.7153 12.8104 15.4752 10.9921 14.805ZM3.74992 10.125C3.74992 9.30918 3.99185 8.51165 4.44511 7.8333C4.89837 7.15494 5.54261 6.62623 6.29636 6.31402C7.0501 6.00181 7.8795 5.92012 8.67967 6.07929C9.47984 6.23845 10.2148 6.63132 10.7917 7.20821C11.3686 7.7851 11.7615 8.5201 11.9207 9.32028C12.0798 10.1204 11.9981 10.9498 11.6859 11.7036C11.3737 12.4573 10.845 13.1016 10.1667 13.5548C9.4883 14.0081 8.69077 14.25 7.87492 14.25C6.78129 14.2488 5.7328 13.8138 4.95948 13.0405C4.18616 12.2672 3.75117 11.2187 3.74992 10.125ZM23.4506 19.3781C23.284 19.4868 23.081 19.5248 22.8864 19.4838C22.6918 19.4429 22.5214 19.3263 22.4127 19.1597C21.7326 18.1117 20.8008 17.2506 19.7025 16.6551C18.6042 16.0595 17.3743 15.7484 16.1249 15.75C15.926 15.75 15.7352 15.671 15.5946 15.5304C15.4539 15.3897 15.3749 15.1989 15.3749 15C15.3749 14.8011 15.4539 14.6103 15.5946 14.4697C15.7352 14.329 15.926 14.25 16.1249 14.25C16.7324 14.2495 17.3322 14.1147 17.8816 13.8554C18.431 13.5962 18.9163 13.2188 19.3029 12.7502C19.6895 12.2816 19.9678 11.7334 20.118 11.1448C20.2682 10.5562 20.2865 9.94168 20.1716 9.34516C20.0568 8.74865 19.8116 8.18486 19.4536 7.69408C19.0956 7.20331 18.6337 6.79766 18.1007 6.50612C17.5678 6.21458 16.977 6.04435 16.3707 6.00759C15.7643 5.97082 15.1573 6.06844 14.5931 6.29346C14.501 6.33323 14.402 6.35416 14.3018 6.35501C14.2016 6.35585 14.1022 6.3366 14.0095 6.29839C13.9169 6.26018 13.8328 6.20379 13.7623 6.13254C13.6918 6.06129 13.6363 5.97664 13.5991 5.88358C13.5619 5.79052 13.5437 5.69094 13.5456 5.59073C13.5475 5.49052 13.5695 5.39171 13.6102 5.30014C13.651 5.20856 13.7097 5.12609 13.7828 5.05758C13.856 4.98907 13.9421 4.93592 14.0362 4.90127C15.3275 4.38626 16.7639 4.36773 18.0681 4.84925C19.3723 5.33077 20.452 6.27823 21.0989 7.50885C21.7458 8.73947 21.914 10.1661 21.5711 11.5134C21.2283 12.8607 20.3986 14.0333 19.2421 14.805C21.0604 15.4752 22.6133 16.7153 23.669 18.3403C23.7776 18.5069 23.8156 18.7099 23.7747 18.9045C23.7337 19.0991 23.6171 19.2695 23.4506 19.3781Z"
														fill="#008AC6"
													></path></svg
												>
											</div>
											<div>
												<h1 class="font-semibold text-xs text-black">
													{#if adultCount > 0}
														{adultCount} Adults
													{/if}

													{#if childrenCount > 0}
														{childrenCount} Children
													{/if}
													{#if infantCount > 0}
														{infantCount} Infant
													{/if}
												</h1>
											</div>
										</div>
										<div class="flex gap-2">
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													><path
														d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM18 12C18 12.1989 17.921 12.3897 17.7803 12.5303C17.6397 12.671 17.4489 12.75 17.25 12.75H12C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6C12.1989 6 12.3897 6.07902 12.5303 6.21967C12.671 6.36032 12.75 6.55109 12.75 6.75V11.25H17.25C17.4489 11.25 17.6397 11.329 17.7803 11.4697C17.921 11.6103 18 11.8011 18 12Z"
														fill="#008AC6"
													></path></svg
												>
											</div>
											<div>
												<h1 class="font-semibold text-xs text-black">09.00 AM - 17.00 PM</h1>
											</div>
										</div>
										<div class="flex gap-2">
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													><path
														d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM12 20.25C10.3683 20.25 8.77326 19.7661 7.41655 18.8596C6.05984 17.9531 5.00242 16.6646 4.378 15.1571C3.75358 13.6496 3.5902 11.9908 3.90853 10.3905C4.22685 8.79016 5.01259 7.32015 6.16637 6.16637C7.32016 5.01259 8.79017 4.22685 10.3905 3.90852C11.9909 3.59019 13.6497 3.75357 15.1571 4.37799C16.6646 5.00242 17.9531 6.05984 18.8596 7.41655C19.7661 8.77325 20.25 10.3683 20.25 12C20.2475 14.1873 19.3775 16.2843 17.8309 17.8309C16.2843 19.3775 14.1873 20.2475 12 20.25ZM11.25 12.75V7.5C11.25 7.30109 11.329 7.11032 11.4697 6.96967C11.6103 6.82902 11.8011 6.75 12 6.75C12.1989 6.75 12.3897 6.82902 12.5303 6.96967C12.671 7.11032 12.75 7.30109 12.75 7.5V12.75C12.75 12.9489 12.671 13.1397 12.5303 13.2803C12.3897 13.421 12.1989 13.5 12 13.5C11.8011 13.5 11.6103 13.421 11.4697 13.2803C11.329 13.1397 11.25 12.9489 11.25 12.75ZM13.125 16.125C13.125 16.3475 13.059 16.565 12.9354 16.75C12.8118 16.935 12.6361 17.0792 12.4305 17.1644C12.225 17.2495 11.9988 17.2718 11.7805 17.2284C11.5623 17.185 11.3618 17.0778 11.2045 16.9205C11.0472 16.7632 10.94 16.5627 10.8966 16.3445C10.8532 16.1262 10.8755 15.9 10.9606 15.6945C11.0458 15.4889 11.19 15.3132 11.375 15.1896C11.56 15.066 11.7775 15 12 15C12.2984 15 12.5845 15.1185 12.7955 15.3295C13.0065 15.5405 13.125 15.8266 13.125 16.125Z"
														fill="#008AC6"
													></path></svg
												>
											</div>
											<div><h1 class="font-semibold text-xs text-black">Non-refundable</h1></div>
										</div>
									</div>
									<div class="p-4 border-b-0 border-sky-600 bg-sky-200">
										<div class="grid grid-cols-2 mb-5">
											<div>
												<p class="text-sm">Total Price</p>
												<p class="text-blue text-xl font-bold">
													{new Intl.NumberFormat('id-ID', {
														style: 'currency',
														currency: 'IDR',
														minimumFractionDigits: 0,
														maximumFractionDigits: 0
													}).format(
														(adultCount * ($decryptedTicket?.adult_price ?? 0) +
															childrenCount * ($decryptedTicket?.children_price ?? 0) +
															infantCount * ($decryptedTicket?.infant_price ?? 0)) *
															(1 - ($decryptedTicket?.discount_percentage ?? 0) / 100)
													)}
												</p>
											</div>
											<div>
												{#if $decryptedTicket?.discount_percentage !== '0'}
													<p class="text-xs text-blue font-semibold">
														By purchasing from this website, you’ve saved <span class="text-lg"
															>%{$decryptedTicket?.discount_percentage}</span
														>
													</p>
												{/if}
											</div>
										</div>
										<button type="submit" class="p-3 w-full rounded-lg bg-blue text-white text-md"
											>Procced to Payment</button
										>
									</div>
								</form>
							</Drawer>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<Footer data={vendor}/>
<style>
	.menu li > *:not(ul, .menu-title, details, .btn):active,
	.menu li > *:not(ul, .menu-title, details, .btn).active,
	.menu li > details > summary:active {
		background-color: transparent;
		color: inherit;
	}

	.menu li > *:not(ul, .menu-title, details, .btn):hover,
	.menu li > *:not(ul, .menu-title, details, .btn):focus {
		background-color: transparent;
		color: inherit;
	}
	input[type='date']::-webkit-calendar-picker-indicator {
		background: transparent;
		bottom: 0;
		color: transparent;
		cursor: pointer;
		height: auto;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: auto;
	}
</style>
