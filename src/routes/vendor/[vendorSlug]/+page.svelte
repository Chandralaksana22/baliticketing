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
	import BaliBirdCard from '$lib/components/Card/BaliBirdCard.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';
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
	console.log(detail);
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
	{#if detail?.layout === 'Layout 1'}
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
	{:else if detail?.layout === 'Layout 2'}
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
	{:else if detail?.layout === 'Layout 3'}
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
				<WhatsOn data={product} />
			</div>
		</div>
		<img
			src="/images/background-biru-desktop.webp"
			class="h-[50vh] mt-[-15%] w-full object-cover hidden lg:block"
			alt="/images/background-biru-desktop.webp"
		/>
	{:else if detail?.layout === 'Layout 4'}
		<div class="mt-10">
			<h4 class="boldfont text-white text-3xl mb-5 text-center">Daily Schedule</h4>
			<BaliBirdCard productsData={detail} />
		</div>
		<section class="relative">
			<h4 class="boldfont text-white w-1/2 mx-auto text-3xl pt-[15%] mb-5 text-center">
				PURCHASE BALI BIRD PARK GENERAL ADMISSION TICKET BY CLICKING ON THIS BUTTON BELOW
			</h4>
			
			<div class="text-center pt-10 pb-20">
				<a
					data-sveltekit-reload
					href="/vendor/{product[0].vendor.slug}/{product[0].slug}"
					class="p-4 text-xl rounded-lg bg-white boldfont text-center"
				>
					Book Ticket
				</a>
			</div>
		</section>
		<img src="/images/background-biru-desktop.webp" class="mt-[-50%]" alt="">
	{:else}
	<img src="/images/Learning-pana.webp" alt="/images/Learning-pana.webp">
		<p>Maaf, sepertinya Anda belum memilih layout yang tersedia.</p>	
	{/if}
</section>
<Footer data={vendor}/>
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
