<script lang="ts">
	import PackageCard from '$lib/components/Section/PackageCard.svelte';
	import { onMount, createEventDispatcher } from 'svelte';
	import GeneralAdmissionSlider from '$lib/components/Section/Vendor/BaliZoo/GeneralAdmissionSlider.svelte';
	import GeneralAdmissionModal from '$lib/components/Modal/DetailVendor/GeneralAdmissionModal.svelte';
	import OpeningHour from '$lib/components/Modal/DetailVendor/OpeningHour.svelte';
	import WhatsOnModalHome from '$lib/components/Modal/DetailVendor/WhatsOnModalHome.svelte';
	import ZooMapModalHome from '$lib/components/Modal/DetailVendor/ZooMapModalHome.svelte';
	import PopularActivity from '$lib/components/Section/Vendor/BaliZoo/PopularActivity.svelte';
	import type { PageServerData } from './$types';
	import GeneralAdmissionCard from '$lib/components/Section/Vendor/BaliFarm/GeneralAdmissionCard.svelte';
	export let data: PageServerData;

	let detail = data?.detail;
	let product = data?.product;
	let popular = data?.popularProduct;
	let singlePackages = data?.product.filter((item: any) => {
		return item.type === "What's On" && item.category === 'Single Package';
	});
	let comboPackages = data?.product.filter((item: any) => {
		return item.type === "What's On" && item.category === 'Combo Package';
	});

	let stayPackages = data?.product.filter((item: any) => {
		return item.type === "What's On" && item.category === 'Stay Package';
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
	console.log('detail', detail);
</script>

<svelte:head>
	<title>
		{detail?.name} | TiketXplorer
	</title>
</svelte:head>

<section class="bg-cover bg-white md:bg-[url('/images/bg-desktop.png')]">
	<img
		src={detail?.images[0].path}
		alt={detail?.images[0].path}
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
		<div class="hidden md:block bg-cover bg-[url('../images/background-biru-desktop.png')]">
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
					<div class="col-span-7 bg-cover bg-center bg-[url('/images/bg-hijau.png')]">
						<button
							type="button"
							class="bg-yellow p-3 boldfont text-xl rounded-b-xl"
							style="position: relative; top:50%; transform-origin: top left; transform: rotate(-90deg) translateX(-50%);"
						>
							<h3 class="boldfont">MEMBERSHIP</h3>
						</button>
						<div class="flex flex-col items-center justify-center pt-10 mx-auto px-10 space-y-4">
							<img class="object-contain h-[35vh]" src="/images/member1.png" alt="Member 1" />
							<img class="object-contain h-[35vh]" src="/images/member2.png" alt="Member 2" />
						</div>
					</div>
				</div>
			</div>
		</section>
	{:else if detail.slug === 'bali-farm-house'}
		<div id="placetogo" class="hidden md:block container mx-auto">
			<h4 class="boldfont text-white text-3xl text-center">General Admission</h4>
			<h4 class="text-white text-lg mb-5 text-center">(For Indonesian ID and Kitas holder)</h4>
			<div class="grid md:grid-cols-2 lg:grid-cols-3 p-10 gap-4">
				<GeneralAdmissionCard data={product} />
			</div>
		</div>
	{:else if detail.slug === 'bali-safari'}{:else if detail.slug === 'bali-bird-park'}{:else}{/if}
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
				class="rounded-xl p-10 bg-cover bg-[url('../assets/image/bg-card.png')] grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center"
			>
				<div>
					<img src="~assets/image/varunalogo.png" class="object-contain h-40 mb-20" alt="" />
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
			src="~assets/image/background-biru-desktop.png"
			class="h-[50vh] mt-[-15%] w-full object-cover hidden md:block"
			alt="~assets/image/background-biru-desktop.png"
		/>
	</div> -->
	<!-- <div class="mt-10" v-if="slug === 'bali-bird-park'">
		<h4 class="boldfont text-white text-3xl mb-5 text-center">Daily Schedule</h4>
		<BaliBirdCard :vendorBaliBird="vendorBaliBird" />
	</div> -->
</section>
<section class="hidden md:block bg-cover bg-[url('../images/background-biru-desktop.png')]">
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
