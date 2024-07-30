<script lang="ts">
	import PackageCard from '$lib/components/Section/PackageCard.svelte';
	import { onMount, createEventDispatcher } from 'svelte';
	import GeneralAdmission from '$lib/components/Section/Ticket/GeneralAdmission.svelte';
	import type { PageServerData } from './$types';
	import BaliSafariTicket from '$lib/components/Section/Ticket/BaliSafariTicket.svelte';
	import CardEvent from '$lib/components/Section/CardEvent.svelte';
	import MobileTicket from '$lib/components/Section/Ticket/MobileTicket.svelte';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';
	export let data: PageServerData;
	let singlePackages = data?.balizoo.filter((item: any) => {
		return item.type === "What's On" && item.category === 'Single Package';
	});
	let comboPackages = data?.balizoo.filter((item: any) => {
		return item.type === "What's On" && item.category === 'Combo Package';
	});

	let stayPackages = data?.balizoo.filter((item: any) => {
		return item.type === "What's On" && item.category === 'Stay Package';
	});
	let balisafari = data.balisafari;
	let balisafariEvent = data?.balisafari.filter((item: any) => {
		return item.type === "What's On";
	});
	let vendorsData = data?.vendor;

	let activeTab = 'styled-profile';
	let keyword : string = data?.keyword;
	let listticket = data?.listticket;
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
<Navbar data={vendorsData}/>
<section class="hidden lg:block bg-white lg:bg-[url('/images/bg-desktop.webp')]">
	<div class="relative w-full">
		<img src="/images/hero-ticket.webp" alt="Hero Ticket" class="w-full h-full object-cover" />
		<div class="absolute inset-0 flex items-center justify-center">
			<h1
				class="boldfont text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl"
			>
				Tickets
			</h1>
		</div>
	</div>
	<div id="placetogo" class="hidden lg:block container mx-auto">
		<h4 class="boldfont text-white text-3xl mb-5 mt-10 text-center">General Admission</h4>
		<div class="grid grid-cols-4 p-10 gap-4">
			<GeneralAdmission {vendorsData} />
		</div>
	</div>
	<h4 class="hidden lg:block boldfont text-white text-3xl pt-5 mb-5 text-center">
		MORE PACKAGES FROM BALI ZOO
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
</section>
<section
	class="hidden lg:block bg-cover bg-white lg:bg-[url('/images/background-biru-desktop.webp')]"
>
	<div id="placetogo" class="pt-[15%] container mx-auto">
		<h4 class="boldfont text-white text-3xl mb-5 text-center">MORE OFFER FROM BALI SAFARI</h4>
		<div class="p-10 mb-[-10%] gap-4">
			<BaliSafariTicket productsData={balisafari} />
		</div>
	</div>
</section>
<section class="hidden lg:block bg-cover bg-white lg:bg-[url('/images/bg-hijau.webp')]">
	<div id="placetogo" class="pt-[15%] container mx-auto">
		<h4 class="boldfont text-white text-3xl mb-5 text-center">NEW EVENT FROM BALI SAFARI</h4>
		<div class="p-10 gap-4">
			<CardEvent productsData={balisafariEvent} />
		</div>
	</div>
</section>
<section class="block lg:hidden bg-white">
	<div class="flex justify-between p-5 items-center">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a data-sveltekit-preload-data >
			<img class="h-[48px] object-contain" src="/images/logomob.webp" alt="images" />
		</a>
		
	</div>
	<div class="sticky top-0 p-5 bg-white">
		<form>
			<label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
				>Search</label
			>
			<div class="relative">
				<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						class="w-4 h-4 text-gray-500 dark:text-gray-400"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 20 20"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						/>
					</svg>
				</div>
				<input
					type="search"
					id="search"
					name="keyword"
					onchange="this.form.submit()"
					bind:value={keyword}
					class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Try search “Bali Zoo”"
				/>
			</div>
		</form>
	</div>
	<div>
		<MobileTicket listTicket={listticket}/>
	</div>
</section>
<Footer data={vendorsData}/>
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
