<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let explorerGA: any = [];
	export let balifarmGA: any = [];
	export let balisafariGA: any = [];
	export let balibirdGA: any = [];
	let activeTab = 'balizooGA';

	const dispatch = createEventDispatcher();

	const switchTab = (tabId: string) => {
		activeTab = tabId;
	};
</script>

<button
	onclick="my_modal_3.showModal()"
	class="flex flex-col lg:flex-row items-center text-center lg:text-left ticket"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-[48px] lg:h-[65px]"
		viewBox="0 0 65 65"
		fill="none"
	>
		<path
			d="M57.1309 26.62C58.0344 26.4362 58.8467 25.9458 59.4302 25.232C60.0138 24.5181 60.3328 23.6245 60.3334 22.7025V16.5C60.3334 15.4391 59.9119 14.4217 59.1618 13.6716C58.4116 12.9214 57.3942 12.5 56.3334 12.5H8.33335C7.27249 12.5 6.25507 12.9214 5.50492 13.6716C4.75478 14.4217 4.33335 15.4391 4.33335 16.5V22.7025C4.33386 23.6245 4.65289 24.5181 5.23646 25.232C5.82004 25.9458 6.63232 26.4362 7.53585 26.62C8.88686 26.9002 10.1 27.6374 10.971 28.7075C11.842 29.7776 12.3175 31.1152 12.3175 32.495C12.3175 33.8748 11.842 35.2124 10.971 36.2825C10.1 37.3526 8.88686 38.0898 7.53585 38.37C6.63064 38.5542 5.81707 39.046 5.2333 39.7619C4.64953 40.4778 4.33155 41.3737 4.33335 42.2975V48.5C4.33335 49.5609 4.75478 50.5783 5.50492 51.3284C6.25507 52.0786 7.27249 52.5 8.33335 52.5H56.3334C57.3942 52.5 58.4116 52.0786 59.1618 51.3284C59.9119 50.5783 60.3334 49.5609 60.3334 48.5V42.2975C60.3328 41.3755 60.0138 40.4819 59.4302 39.768C58.8467 39.0542 58.0344 38.5638 57.1309 38.38C55.7798 38.0998 54.5667 37.3626 53.6957 36.2925C52.8247 35.2224 52.3492 33.8848 52.3492 32.505C52.3492 31.1252 52.8247 29.7876 53.6957 28.7175C54.5667 27.6474 55.7798 26.9102 57.1309 26.63V26.62ZM8.33335 42.3C10.5926 41.8398 12.6234 40.613 14.0819 38.8273C15.5405 37.0417 16.3372 34.8069 16.3372 32.5013C16.3372 30.1956 15.5405 27.9608 14.0819 26.1752C12.6234 24.3895 10.5926 23.1627 8.33335 22.7025V16.5H22.3334V48.5H8.33335V42.3Z"
			fill="#BF9500"
		/>
	</svg>
	<div>
		<p class="font-bold text-sm lg:text-lg">General Admission</p>
		<p class="text-sm hidden lg:block">Purchase a daily pass</p>
	</div>
</button>
<dialog id="my_modal_3" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<div
			class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
		>
			<h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
				General Admission
			</h3>
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			</form>
		</div>
		<div class="p-4 md:p-5 space-y-4">
			<!-- Tab buttons -->
			<div class="mb-4 sticky top-0 bg-white">
				<ul
					class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4"
					id="default-tab"
				>
					<li class="me-2">
						<button
							class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
							id="balizooGA-tab"
							on:click={() => switchTab('balizooGA')}
							class:active={activeTab === 'balizooGA'}
							type="button"
							aria-selected={activeTab === 'balizooGA'}>Bali Zoo</button
						>
					</li>
					<li class="me-2">
						<button
							class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
							id="balifarmGA-tab"
							on:click={() => switchTab('balifarmGA')}
							class:active={activeTab === 'balifarmGA'}
							type="button"
							aria-selected={activeTab === 'balifarmGA'}>Bali Farm House</button
						>
					</li>
					<li class="me-2">
						<button
							class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
							id="balisafariGA-tab"
							on:click={() => switchTab('balisafariGA')}
							class:active={activeTab === 'balisafariGA'}
							type="button"
							aria-selected={activeTab === 'balisafariGA'}>Bali Safari</button
						>
					</li>
					<li class="me-2">
						<button
							class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
							id="balibirdGA-tab"
							on:click={() => switchTab('balibirdGA')}
							class:active={activeTab === 'balibirdGA'}
							type="button"
							aria-selected={activeTab === 'balibirdGA'}>Bali Bird Park</button
						>
					</li>
					<!-- Add more tab buttons here -->
				</ul>
			</div>

			<!-- Tab content -->
			<div id="default-tab-content">
				<!-- Content for each tab -->
				<div
					class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="balizooGA"
					role="tabpanel"
					aria-labelledby="balizooGA-tab"
					hidden={activeTab !== 'balizooGA'}
				>
					<div
						class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"
					>
						<!-- Svelte loop for products -->
						{#each explorerGA as product}
							{#if product?.type === 'General Admission'}
								<div>
									<a href={product?.link_address}>
										<img loading="lazy"
											class="rounded-none h-[25vh] object-cover w-full object-top"
											src={product?.images[0]?.path}
											alt={product?.name}
										/>
									</a>
									<div class="p-2 text-center">
										<h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 truncate">
											{product?.name}
										</h5>
										<!-- Replace NuxtLink with Svelte Link equivalent -->
										<a
											href={`/vendor/${product?.vendor.slug}/${product?.slug}`}
											class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a
										>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
				<!-- Add more tab content here -->
				<div
					class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="balifarmGA"
					hidden={activeTab !== 'balifarmGA'}
				>
					<div
						class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"
					>
						<!-- Svelte loop for products -->
						{#each balifarmGA as product}
							{#if product?.type === 'General Admission'}
								<div>
									<a href={product?.link_address}>
										<img loading="lazy"
											class="rounded-none h-[25vh] object-cover w-full object-top"
											src={product?.images[0]?.path}
											alt={product?.name}
										/>
									</a>
									<div class="p-2 text-center">
										<h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 truncate">
											{product?.name}
										</h5>
										<!-- Replace NuxtLink with Svelte Link equivalent -->
										<a
											href={`/ticket-detail/${product?.vendor.slug}/${product?.slug}`}
											class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a
										>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
				<div
					class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="balisafariGA"
					hidden={activeTab !== 'balisafariGA'}
				>
					<div
						class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"
					>
						<!-- Svelte loop for products -->
						{#each balisafariGA as product}
							{#if product?.type === 'General Admission'}
								<div>
									<a href={product?.link_address}>
										<img loading="lazy"
											class="rounded-none h-[25vh] object-cover w-full object-top"
											src={product?.images[0]?.path}
											alt={product?.name}
										/>
									</a>
									<div class="p-2 text-center">
										<h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 truncate">
											{product?.name}
										</h5>
										<!-- Replace NuxtLink with Svelte Link equivalent -->
										<a
											href={`/ticket-detail/${product?.vendor.slug}/${product?.slug}`}
											class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a
										>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
				<div
					class="p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
					id="balibirdGA"
					hidden={activeTab !== 'balibirdGA'}
				>
					<div
						class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"
					>
						<!-- Svelte loop for products -->
						{#each balibirdGA as product}
							{#if product?.type === 'General Admission'}
								<div>
									<a href={product?.link_address}>
										<img loading="lazy"
											class="rounded-none h-[25vh] object-cover w-full object-top"
											src={product?.images[0]?.path}
											alt={product?.name}
										/>
									</a>
									<div class="p-2 text-center">
										<h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 truncate">
											{product?.name}
										</h5>
										<!-- Replace NuxtLink with Svelte Link equivalent -->
										<a
											href={`/ticket-detail/${product?.vendor.slug}/${product?.slug}`}
											class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a
										>
									</div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</dialog>
