<script lang="ts">
	import CryptoJS from 'crypto-js';
	import PackageCard from '$lib/components/Section/PackageCard.svelte';
	import { onMount, createEventDispatcher } from 'svelte';
	import GeneralAdmissionSlider from '$lib/components/Section/Vendor/BaliZoo/GeneralAdmissionSlider.svelte';
	import GeneralAdmissionModal from '$lib/components/Modal/DetailVendor/GeneralAdmissionModal.svelte';
	import OpeningHour from '$lib/components/Modal/DetailVendor/OpeningHour.svelte';
	import WhatsOnModalHome from '$lib/components/Modal/DetailVendor/WhatsOnModalHome.svelte';
	import ZooMapModalHome from '$lib/components/Modal/DetailVendor/ZooMapModalHome.svelte';
	import PopularActivity from '$lib/components/Section/Vendor/BaliZoo/PopularActivity.svelte';
	import GeneralAdmissionBaliSafari from '$lib/components/Section/Vendor/BaliSafari/SliderGA.svelte';
	import type { PageServerData } from './$types';
	import GeneralAdmissionCard from '$lib/components/Section/Vendor/BaliFarm/GeneralAdmissionCard.svelte';
	import WhatsOnCard from '$lib/components/Section/Vendor/BaliFarm/WhatsOnCard.svelte';
	export let data: PageServerData;
	import { goto } from '$app/navigation';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	import WhatsOn from '$lib/components/Section/Vendor/BaliSafari/WhatsOn.svelte';
	// function navigateToMobileTicket(listTicket: any) {
	//     sessionStorage.setItem('selectedTicket', JSON.stringify(listTicket));
	//     goto('/mobileticket');
	// }
	function generateSecretKey() {
		return CryptoJS.lib.WordArray.random(16).toString();
	}

	export function navigateToMobileTicket(listTicket: any) {
		const secretKey = generateSecretKey();
		const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(listTicket), secretKey).toString();
		sessionStorage.setItem('item', encryptedData);
		sessionStorage.setItem('key', secretKey);
		const url = `/vendor/${listTicket.vendor.slug}/${listTicket.product.slug}`;
		goto(url);
	}

	let detail = data?.detail;
	let product = data?.product;
	let popular = data?.popularProduct;
	let listTicket = data?.listTicket;
	let vendor = data?.vendor;

	let singlePackages = data?.product?.filter((item: any) => {
		return item?.type === "What's On" && item?.category === 'Single Package';
	});
	let comboPackages = data?.product?.filter((item: any) => {
		return item?.type === "What's On" && item?.category === 'Combo Package';
	});

	let stayPackages = data?.product?.filter((item: any) => {
		return item?.type === "What's On" && item?.category === 'Stay Package';
	});

	let activeTab = 'styled-profile';
	const dispatch = createEventDispatcher();

	onMount(() => {
		showTab(activeTab);
	});
	function showTab(tabId: string) {
		dispatch('changeTab', tabId);

		activeTab = tabId;

		const tabs = document.querySelectorAll('[data-tabs-toggle] button');
		tabs.forEach((tab) => {
			const selected = tab.getAttribute('data-tabs-target') === `#${tabId}`;
			tab.setAttribute('aria-selected', selected ? 'true' : 'false');
		});

		const tabContents = document.querySelectorAll('[role="tabpanel"]');
		tabContents.forEach((content) => {
			const isVisible = content.id === tabId;
			content.classList.toggle('hidden', !isVisible);
			content.setAttribute('aria-hidden', isVisible ? 'false' : 'true');
		});
	}
</script>

<svelte:head>
	<title>
		{detail?.name} | TiketXplorer
	</title>
</svelte:head>
<Navbar data={vendor} />
<section class="bg-cover bg-white md:bg-[url('/images/bg-desktop.webp')] hidden md:block">
	<img
		src={detail?.images[0]?.path}
		alt={detail?.images[0]?.path}
		class="h-[100vh] object-cover w-full"
	/>
	<div class="hidden md:block px-5 pb-0 md:pb-44 md:px-10 container mx-auto">
		<div class="panel-transparent p-5 md:p-10 rounded-3xl mt-10 mb-[-20%] relative">
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
				<OpeningHour data={detail} />
				<GeneralAdmissionModal explorerGA={product} />
				<ZooMapModalHome />
				<WhatsOnModalHome explorerWO={product} />
			</div>
		</div>
	</div>
	{#if detail.slug === 'bali-zoo'}
		<PopularActivity data={popular} />
		<div class="hidden md:block bg-cover bg-[url('../images/background-biru-desktop.webp')]">
			<h4 class="boldfont text-white text-3xl pt-[15%] mb-5 text-center">
				ALL PACKAGES, GET MORE PAY LESS
			</h4>
			<div class="p-10">
				<div class="mb-4">
					<ul
						class="flex flex-wrap -mb-px text-sm font-medium mx-auto justify-center text-center"
						id="default-styled-tab"
						data-tabs-toggle="#default-styled-tab-content"
						role="tablist"
					>
						<li class="me-2" role="presentation">
							<button
								class="inline-block package boldfont rounded-lg p-4"
								id="profile-styled-tab"
								on:click={() => showTab('styled-profile')}
								aria-controls="styled-profile"
								aria-selected={activeTab === 'styled-profile' ? 'true' : 'false'}
								type="button"
								role="tab">SINGLE PACKAGE</button
							>
						</li>
						<li class="me-2" role="presentation">
							<button
								class="inline-block package boldfont rounded-lg p-4"
								id="dashboard-styled-tab"
								on:click={() => showTab('styled-dashboard')}
								aria-controls="styled-dashboard"
								aria-selected={activeTab === 'styled-dashboard' ? 'true' : 'false'}
								type="button"
								role="tab">COMBO PACKAGE</button
							>
						</li>
						<li class="me-2" role="presentation">
							<button
								class="inline-block package boldfont rounded-lg p-4"
								id="settings-styled-tab"
								on:click={() => showTab('styled-settings')}
								aria-controls="styled-settings"
								aria-selected={activeTab === 'styled-settings' ? 'true' : 'false'}
								type="button"
								role="tab">STAY PACKAGE</button
							>
						</li>
					</ul>
				</div>
				<div id="default-styled-tab-content">
					<div
						class="{activeTab === 'styled-profile' ? '' : 'hidden'} h-[400px]"
						id="styled-profile"
						role="tabpanel"
						aria-labelledby="profile-styled-tab"
					>
						<PackageCard productsData={singlePackages} />
					</div>
					<div
						class="{activeTab === 'styled-dashboard' ? '' : 'hidden'} h-[400px]"
						id="styled-dashboard"
						role="tabpanel"
						aria-labelledby="dashboard-styled-tab"
					>
						<PackageCard productsData={comboPackages} />
					</div>
					<div
						class="{activeTab === 'styled-settings' ? '' : 'hidden'} h-[400px]"
						id="styled-settings"
						role="tabpanel"
						aria-labelledby="settings-styled-tab"
					>
						<PackageCard productsData={stayPackages} />
					</div>
				</div>
			</div>
		</div>
		<section class="hidden md:block">
			<div>
				<div class="grid grid-cols-1 md:grid-cols-12">
					<div class="col-span-5">
						<GeneralAdmissionSlider data={product} />
					</div>
					<div class="col-span-7 bg-cover bg-center bg-[url('/images/bg-hijau.webp')]">
						<button
							type="button"
							class="bg-yellow p-3 boldfont text-xl rounded-b-xl"
							style="position: relative; top:50%; transform-origin: top left; transform: rotate(-90deg) translateX(-50%);"
						>
							<h3 class="boldfont">MEMBERSHIP</h3>
						</button>
						<div class="flex flex-col items-center justify-center pt-10 mx-auto px-10 space-y-4">
							<img class="object-contain h-[35vh]" src="/images/member1.webp" alt="Member 1" />
							<img class="object-contain h-[35vh]" src="/images/member2.webp" alt="Member 2" />
						</div>
					</div>
				</div>
			</div>
		</section>
	{:else if detail.slug === 'bali-farm-house'}
		<div id="placetogo" class="hidden md:block container mx-auto">
			<h4 class="boldfont text-white text-3xl text-center">General Admission</h4>
			<h4 class="text-white text-lg mb-5 text-center">(For Indonesian ID and Kitas holder)</h4>
			<GeneralAdmissionCard data={product} />
		</div>
		<!-- <section class="hidden lg:block bg-cover bg-[url('/images/background-biru-desktop.webp')]">
			<div class="container mx-auto">
				<h4 class="boldfont text-white text-3xl pt-[15%] mb-5 text-center">OTHER ACTIVITY</h4>
				<div class="p-10 grid grid-cols-2 gap-4">
					<WhatsOnCard data={product} />
				</div>
			</div>
		</section> -->
	{:else if detail.slug === 'bali-safari'}
		<div class="mt-10">
			<div id="placetogo" class="container mx-auto px-10">
				<h4 class="boldfont text-white text-3xl mb-5 text-center">General Admission</h4>
				<GeneralAdmissionBaliSafari data={product} />
			</div>
		</div>
		<h4 class="boldfont text-white text-3xl py-10 text-center">WHAT’S NEW ON BALI SAFARI</h4>
		<div class="px-10 relative z-10">
			<div
				class="rounded-xl p-10 bg-cover bg-[url('/images/bg-card.webp')] grid grid-cols-2 gap-4 justify-center"
			>
				<div>
					<img src="/images/varunalogo.webp" class="object-contain h-40 mb-20" alt="images" />
					<h1 class="boldfont text-white text-3xl">Varuna Show</h1>
					<p class="text-white text-md mt-10">
						Varuna’s stage bursts to life with vibrant performers, adorned in marine-inspired
						attire, guiding you through the captivating odyssey of Varuna, the young hero. The
						voyage unfolds with every dish, act, and moment, creating an immersive narrative.
					</p>
				</div>
			<WhatsOn data={product}/>
			</div>
		</div>
		<img
			src="/images/background-biru-desktop.webp"
			class="h-[50vh] mt-[-15%] w-full object-cover hidden lg:block"
			alt="/images/background-biru-desktop.webp"
		/>
	{:else if detail.slug === 'bali-bird-park'}{:else}{/if}
	<!-- <div class="mt-10" v-if="slug === 'bali-zoo'">
		<PopularActivities :explorerData="explorerData" :vendorSlug="slug" />
	</div> -->
	<!-- <div class="mt-10" v-if="slug === 'bali-farm-house'">
		<div id="placetogo" class="hidden md:block container mx-auto">
			<h4 class="boldfont text-white text-3xl text-center">General Admission</h4>
			<h4 class="text-white text-lg mb-5 text-center">(For Indonesian ID and Kitas holder)</h4>
			<div class="grid md:grid-cols-2 lg:grid-cols-4 p-10 gap-4">
				<BaliFarmGA :GABaliFarm="GABaliFarm" :vendorSlug="slug" />
			</div>
		</div>
	</div> -->
	<!-- <div class="mt-10" v-if="slug === 'bali-safari'">
		<div id="placetogo" class="hidden md:block container mx-auto">
			<h4 class="boldfont text-white text-3xl text-center">General Admission</h4>
			<div class="p-10 gap-4">
				<BaliSafariTicket :balisafari="balisafari" />
			</div>
		</div>
		<h4 class="boldfont text-white text-3xl py-10 text-center">WHAT’S NEW ON BALI SAFARI</h4>
		<div class="px-10 relative z-10">
			<div
				class="rounded-xl p-10 bg-cover bg-[url('/images/bg-card.webp')] grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center"
			>
				<div>
					<img src="~assets/image/varunalogo.webp" class="object-contain h-40 mb-20" alt="images" />
					<h1 class="boldfont text-white text-3xl">Varuna Show</h1>
					<p class="text-white text-md mt-10">
						Varuna’s stage bursts to life with vibrant performers, adorned in marine-inspired
						attire, guiding you through the captivating odyssey of Varuna, the young hero. The
						voyage unfolds with every dish, act, and moment, creating an immersive narrative.
					</p>
				</div>
				<div class="flex flex-col gap-4">
					<div
						class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5"
					>
						<div class="flex justify-between items-center">
							<h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1>
							<a data-sveltekit-reload  href="" class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end"
								>Book Ticket</a
							>
						</div>
						<p class="mt-5 text-sm text-white">
							Wine (red/white), 3-course lunch, preferential seating, and VIP waiting lounge with
							free canape &amp; mocktail/cocktail
						</p>
					</div>
					<div
						class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5"
					>
						<div class="flex justify-between items-center">
							<h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1>
							<a data-sveltekit-reload  href="" class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end"
								>Book Ticket</a
							>
						</div>
						<p class="mt-5 text-sm text-white">
							Wine (red/white), 3-course lunch, preferential seating, and VIP waiting lounge with
							free canape &amp; mocktail/cocktail
						</p>
					</div>
					<div
						class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5"
					>
						<div class="flex justify-between items-center">
							<h1 class="text-white font-semibold text-xl">PREMIUM PACKAGE</h1>
							<a data-sveltekit-reload  href="" class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end"
								>Book Ticket</a
							>
						</div>
						<p class="mt-5 text-sm text-white">
							Wine (red/white), 3-course lunch, preferential seating, and VIP waiting lounge with
							free canape &amp; mocktail/cocktail
						</p>
					</div>
				</div>
			</div>
		</div>
		<img
			src="~assets/image/background-biru-desktop.webp"
			class="h-[50vh] mt-[-15%] w-full object-cover hidden md:block"
			alt="~assets/image/background-biru-desktop.webp"
		/>
	</div> -->
	<!-- <div class="mt-10" v-if="slug === 'bali-bird-park'">
		<h4 class="boldfont text-white text-3xl mb-5 text-center">Daily Schedule</h4>
		<BaliBirdCard :vendorBaliBird="vendorBaliBird" />
	</div> -->
</section>
<div
	class="block md:hidden bg-center bg-cover bg-no-repeat bg-gray-600 bg-blend-multiply"
	style="background-image: url({detail?.images[0]?.path});"
>
	<div class="h-[15vh] px-5 lg:px-10 flex items-center">
		<h1 class="mb-4 boldfont text-lg text-center mx-auto tracking-tight leading-none text-white">
			{detail?.name}
		</h1>
	</div>
</div>
<div class="bg-white block lg:hidden">
	<div class="container mx-auto px-5 lg:px-20">
		<div class="my-10 flex items-start">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
				><path
					d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM23 17H16C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17Z"
					fill="#008AC6"
				></path></svg
			>
			<h1 class="boldfont text-lg text-blue">Zoo Opening Hour</h1>
		</div>
		<div class="grid grid-cols-2 gap-2 w-full">
			{#each detail?.schedule as schedule}
				<p class="font-bold">{schedule?.day}</p>
				<p>{schedule?.start_time.slice(11, 16)} - {schedule?.end_time.slice(11, 16)}</p>
			{/each}
		</div>
		<div class="my-10 flex items-start">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
				><path
					d="M28.615 6.21127C28.4952 6.11793 28.3557 6.0531 28.2072 6.02169C28.0586 5.99029 27.9048 5.99314 27.7575 6.03002L20.1162 7.94002L12.4475 4.10502C12.2338 3.99844 11.9891 3.97184 11.7575 4.03002L3.7575 6.03002C3.54116 6.08409 3.3491 6.20893 3.21185 6.38468C3.0746 6.56044 3.00003 6.77702 3 7.00002V25C3.00002 25.152 3.03467 25.3019 3.10132 25.4385C3.16797 25.575 3.26486 25.6946 3.38463 25.7881C3.50441 25.8816 3.64392 25.9466 3.79256 25.9781C3.94121 26.0096 4.09508 26.0069 4.2425 25.97L11.8837 24.06L19.5525 27.895C19.6917 27.9637 19.8448 27.9996 20 28C20.0818 28 20.1632 27.9899 20.2425 27.97L28.2425 25.97C28.4588 25.9159 28.6509 25.7911 28.7881 25.6154C28.9254 25.4396 29 25.223 29 25V7.00002C29 6.84792 28.9654 6.69783 28.8987 6.56115C28.8319 6.42447 28.7349 6.3048 28.615 6.21127ZM12 22C11.9182 22.0001 11.8368 22.0101 11.7575 22.03L5 23.7188V7.78127L11.8837 6.06002L12 6.11752V22ZM27 24.2188L20.1162 25.94L20 25.8825V10C20.0817 10.0004 20.1631 9.99072 20.2425 9.97127L27 8.28127V24.2188Z"
					fill="#008AC6"
				></path></svg
			>
			<h1 class="boldfont text-lg text-blue">Location</h1>
		</div>
		<h6>{detail?.address}</h6>
		<!-- <button class="my-10 flex items-center p-2 gap-4 bg-blue rounded-lg"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="17"
				viewBox="0 0 16 17"
				fill="none"
				><path
					d="M14 10V13.5C14 13.7652 13.8946 14.0196 13.7071 14.2071C13.5196 14.3946 13.2652 14.5 13 14.5H3C2.73478 14.5 2.48043 14.3946 2.29289 14.2071C2.10536 14.0196 2 13.7652 2 13.5V10C2 9.86739 2.05268 9.74021 2.14645 9.64645C2.24021 9.55268 2.36739 9.5 2.5 9.5C2.63261 9.5 2.75979 9.55268 2.85355 9.64645C2.94732 9.74021 3 9.86739 3 10V13.5H13V10C13 9.86739 13.0527 9.74021 13.1464 9.64645C13.2402 9.55268 13.3674 9.5 13.5 9.5C13.6326 9.5 13.7598 9.55268 13.8536 9.64645C13.9473 9.74021 14 9.86739 14 10ZM7.64625 10.3538C7.69269 10.4002 7.74783 10.4371 7.80853 10.4623C7.86923 10.4874 7.93429 10.5004 8 10.5004C8.06571 10.5004 8.13077 10.4874 8.19147 10.4623C8.25217 10.4371 8.30731 10.4002 8.35375 10.3538L10.8538 7.85375C10.9002 7.8073 10.9371 7.75214 10.9622 7.69145C10.9873 7.63075 11.0003 7.5657 11.0003 7.5C11.0003 7.4343 10.9873 7.36925 10.9622 7.30855C10.9371 7.24786 10.9002 7.1927 10.8538 7.14625C10.8073 7.09979 10.7521 7.06294 10.6914 7.0378C10.6308 7.01266 10.5657 6.99972 10.5 6.99972C10.4343 6.99972 10.3692 7.01266 10.3086 7.0378C10.2479 7.06294 10.1927 7.09979 10.1462 7.14625L8.5 8.79313V3C8.5 2.86739 8.44732 2.74021 8.35355 2.64645C8.25979 2.55268 8.13261 2.5 8 2.5C7.86739 2.5 7.74021 2.55268 7.64645 2.64645C7.55268 2.74021 7.5 2.86739 7.5 3V8.79313L5.85375 7.14625C5.75993 7.05243 5.63268 6.99972 5.5 6.99972C5.36732 6.99972 5.24007 7.05243 5.14625 7.14625C5.05243 7.24007 4.99972 7.36732 4.99972 7.5C4.99972 7.63268 5.05243 7.75993 5.14625 7.85375L7.64625 10.3538Z"
					fill="white"
				></path></svg
			>
			<h1 class="text-md text-white">Download zoo map</h1></button
		> -->
		<div class="my-10 flex items-start">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
				><path
					d="M28.3988 13.06C28.8505 12.9681 29.2567 12.7229 29.5484 12.366C29.8402 12.009 29.9998 11.5623 30 11.1012V8C30 7.46957 29.7893 6.96086 29.4142 6.58579C29.0391 6.21071 28.5304 6 28 6H4C3.46957 6 2.96086 6.21071 2.58579 6.58579C2.21072 6.96086 2 7.46957 2 8V11.1012C2.00026 11.5623 2.15977 12.009 2.45156 12.366C2.74335 12.7229 3.14949 12.9681 3.60125 13.06C4.27676 13.2001 4.88335 13.5687 5.31883 14.1038C5.75431 14.6388 5.99208 15.3076 5.99208 15.9975C5.99208 16.6874 5.75431 17.3562 5.31883 17.8912C4.88335 18.4263 4.27676 18.7949 3.60125 18.935C3.14865 19.0271 2.74186 19.273 2.44998 19.631C2.15809 19.9889 1.9991 20.4369 2 20.8988V24C2 24.5304 2.21072 25.0391 2.58579 25.4142C2.96086 25.7893 3.46957 26 4 26H28C28.5304 26 29.0391 25.7893 29.4142 25.4142C29.7893 25.0391 30 24.5304 30 24V20.8988C29.9998 20.4377 29.8402 19.9909 29.5484 19.634C29.2567 19.2771 28.8505 19.0319 28.3988 18.94C27.7232 18.7999 27.1167 18.4313 26.6812 17.8962C26.2457 17.3612 26.0079 16.6924 26.0079 16.0025C26.0079 15.3126 26.2457 14.6438 26.6812 14.1088C27.1167 13.5737 27.7232 13.2051 28.3988 13.065V13.06ZM4 20.9C5.12962 20.6699 6.14502 20.0565 6.8743 19.1637C7.60358 18.2708 8.00194 17.1534 8.00194 16.0006C8.00194 14.8478 7.60358 13.7304 6.8743 12.8376C6.14502 11.9448 5.12962 11.3314 4 11.1012V8H11V24H4V20.9Z"
					fill="#008AC6"
				></path></svg
			>
			<h1 class="boldfont text-lg text-blue">Tickets from Bali Zoo</h1>
		</div>
		<div class="my-10">
			{#each listTicket as listTicket}
				<div>
					<a
						href="/mobileticket"
						class="grid grid-cols-3 gap-3 pt-5 items-start"
						style="border-bottom: 1px solid rgb(156, 163, 175);"
						on:click|preventDefault={() => navigateToMobileTicket(listTicket)}
						><div class="col-span-1">
							<img
								src={listTicket?.images[0]?.path}
								alt="Bali Zoo"
								class="rounded-2xl h-[130px] w-[130px] object-cover"
							/>
						</div>
						<div class="col-span-2">
							<button class="bg-[#926000] rounded-lg p-2 font-bold text-white text-xs uppercase"
								>{listTicket?.vendor?.name}</button
							>
							<div class="grid grid-cols-2 mt-2 gap-1">
								<button class="bg-[#FFD600] rounded-lg px-2 py-1 text-black text-[10px] font-bold"
									>{listTicket?.product?.type}</button
								>
								<!-- <button class="bg-transparent text-blue text-[10px] font-bold"
								>Booked 6 times today</button
							> -->
							</div>
							<div class="my-5">
								<h2 class="text-xs text-gray-400 font-bold">{listTicket?.product?.category}</h2>
								<h1 class="text-lg text-black font-bold">{listTicket?.name}</h1>
								<p class="text-xs text-gray-600 line-through">
									From IDR {new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR',
										minimumFractionDigits: 0,
										maximumFractionDigits: 0
									}).format(listTicket?.adult_price ?? 0)}
								</p>
								<p class="text-md text-[#EF681C] font-bold">
									From IDR {new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR',
										minimumFractionDigits: 0,
										maximumFractionDigits: 0
									}).format(
										(listTicket?.adult_price ?? 0) *
											(1 - (listTicket?.discount_percentage ?? 0) / 100)
									)} <span class="text-sm text-black">/person</span>
								</p>
							</div>
						</div></a
					>
				</div>
			{/each}
		</div>
	</div>
</div>
<section class="hidden md:block bg-cover bg-[url('../images/background-biru-desktop.webp')]">
	<!-- <div class="mt-10" v-if="slug === 'bali-zoo'">
		<h4 class="boldfont text-white text-3xl pt-[15%] mb-5 text-center">
			ALL PACKAGES, GET MORE PAY LESS
		</h4>
		<div class="p-10">
			<div class="mb-4">
				<ul
					class="flex flex-wrap -mb-px text-sm font-medium mx-auto justify-center text-center"
					id="default-styled-tab"
					data-tabs-toggle="#default-styled-tab-content"
					role="tablist"
				>
					<li class="me-2" role="presentation">
						<button
							class="inline-block package boldfont rounded-lg p-4"
							id="profile-styled-tab"
							data-tabs-target="#styled-profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false">SINGLE PACKAGE</button
						>
					</li>
					<li class="me-2" role="presentation">
						<button
							class="inline-block package boldfont rounded-lg p-4"
							id="dashboard-styled-tab"
							data-tabs-target="#styled-dashboard"
							type="button"
							role="tab"
							aria-controls="dashboard"
							aria-selected="false">COMBO PACKAGE</button
						>
					</li>
					<li class="me-2" role="presentation">
						<button
							class="inline-block package boldfont rounded-lg p-4"
							id="settings-styled-tab"
							data-tabs-target="#styled-settings"
							type="button"
							role="tab"
							aria-controls="settings"
							aria-selected="false">STAY PACKAGE</button
						>
					</li>
				</ul>
			</div>
			<div id="default-styled-tab-content">
				<div
					class="hidden h-[400px]"
					id="styled-profile"
					role="tabpanel"
					aria-labelledby="profile-tab"
				>
					<ExplorerSPData :products="explorerSPData" />
				</div>
				<div
					class="hidden h-[400px]"
					id="styled-dashboard"
					role="tabpanel"
					aria-labelledby="dashboard-tab"
				>
					<ExplorerSPData :products="explorerCPData" />
				</div>
				<div
					class="hidden h-[400px]"
					id="styled-settings"
					role="tabpanel"
					aria-labelledby="settings-tab"
				>
					<ExplorerSPData :products="explorerSTPData" />
				</div>
			</div>
		</div>
	</div>
	<div v-if="slug === 'bali-farm-house'">
		<div class="container mx-auto">
			<h4 class="boldfont text-white text-3xl pt-[5%] mb-5 text-center">OTHER ACTIVITY</h4>
			<div class="p-10 grid grid-cols-2 gap-4">
				<a data-sveltekit-reload ctivityBaliFarm :BaliFarmData="BaliFarmData" :vendorSlug="slug" />
			</div>
		</div>
	</div>
	<div v-if="slug === 'bali-bird-park'">
		<h4 class="boldfont text-white w-1/2 mx-auto text-3xl pt-[15%] mb-5 text-center">
			PURCHASE BALI BIRD PARK GENERAL ADMISSION TICKET BY CLICKING ON THIS BUTTON BELOW
		</h4>

		<div class="text-center pt-10 pb-20">
			<NuxtLink
				v-if="balibirdParkData.length > 0"
				:to="`/ticket-detail/${balibirdParkData[0].vendor.slug}/${balibirdParkData[0].slug}`"
				class="p-4 text-xl rounded-lg bg-white boldfont text-center"
			>
				Book Ticket
			</NuxtLink>
		</div>
	</div> -->
</section>

<style>
	button.package[aria-selected='false'] {
		background-color: #0887be;
		color: #ffd600;
	}

	button.package[aria-selected='true'] {
		background-color: #ffd600;
		color: #0887be;
	}
</style>
