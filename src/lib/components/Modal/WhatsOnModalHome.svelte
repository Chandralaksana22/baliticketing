<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let explorerWO: any = [];
	export let balifarmWO: any = [];
	export let balisafariWO: any = [];
	export let balibirdWO: any = [];
	let showModal = false;
	let activeTab = 'balizooWO';

	const dispatch = createEventDispatcher();

	const openModal = () => {
		showModal = true;
	};

	const closeModal = () => {
		showModal = false;
	};

	const switchTab = (tabId: string) => {
		activeTab = tabId;
	};

	onMount(() => {
		// Handle initialization or API calls if needed
	});

	const formatTime = (time: string) => {
		return time;
	};
</script>

<button
	onclick="my_modal_6.showModal()"
	class="flex flex-col lg:flex-row items-center text-center lg:text-left wo"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-[48px] lg:h-[65px]"
		viewBox="0 0 64 65"
		fill="none"
	>
		<path
			d="M52 8.5H46V6.5C46 5.96957 45.7893 5.46086 45.4142 5.08579C45.0391 4.71071 44.5304 4.5 44 4.5C43.4696 4.5 42.9609 4.71071 42.5858 5.08579C42.2107 5.46086 42 5.96957 42 6.5V8.5H22V6.5C22 5.96957 21.7893 5.46086 21.4142 5.08579C21.0391 4.71071 20.5304 4.5 20 4.5C19.4696 4.5 18.9609 4.71071 18.5858 5.08579C18.2107 5.46086 18 5.96957 18 6.5V8.5H12C10.9391 8.5 9.92172 8.92143 9.17157 9.67157C8.42143 10.4217 8 11.4391 8 12.5V52.5C8 53.5609 8.42143 54.5783 9.17157 55.3284C9.92172 56.0786 10.9391 56.5 12 56.5H52C53.0609 56.5 54.0783 56.0786 54.8284 55.3284C55.5786 54.5783 56 53.5609 56 52.5V12.5C56 11.4391 55.5786 10.4217 54.8284 9.67157C54.0783 8.92143 53.0609 8.5 52 8.5ZM42.415 33.915L30.415 45.915C30.2293 46.101 30.0087 46.2485 29.7659 46.3491C29.5231 46.4498 29.2628 46.5016 29 46.5016C28.7372 46.5016 28.4769 46.4498 28.2341 46.3491C27.9913 46.2485 27.7707 46.101 27.585 45.915L21.585 39.915C21.2097 39.5397 20.9989 39.0307 20.9989 38.5C20.9989 37.9693 21.2097 37.4603 21.585 37.085C21.9603 36.7097 22.4693 36.4989 23 36.4989C23.5307 36.4989 24.0397 36.7097 24.415 37.085L29 41.6725L39.585 31.085C39.7708 30.8992 39.9914 30.7518 40.2342 30.6512C40.477 30.5506 40.7372 30.4989 41 30.4989C41.2628 30.4989 41.523 30.5506 41.7658 30.6512C42.0086 30.7518 42.2292 30.8992 42.415 31.085C42.6008 31.2708 42.7482 31.4914 42.8488 31.7342C42.9494 31.977 43.0011 32.2372 43.0011 32.5C43.0011 32.7628 42.9494 33.023 42.8488 33.2658C42.7482 33.5086 42.6008 33.7292 42.415 33.915ZM12 20.5V12.5H18V14.5C18 15.0304 18.2107 15.5391 18.5858 15.9142C18.9609 16.2893 19.4696 16.5 20 16.5C20.5304 16.5 21.0391 16.2893 21.4142 15.9142C21.7893 15.5391 22 15.0304 22 14.5V12.5H42V14.5C42 15.0304 42.2107 15.5391 42.5858 15.9142C42.9609 16.2893 43.4696 16.5 44 16.5C44.5304 16.5 45.0391 16.2893 45.4142 15.9142C45.7893 15.5391 46 15.0304 46 14.5V12.5H52V20.5H12Z"
			fill="white"
		/>
	</svg>
	<div>
		<p class="font-bold text-sm lg:text-lg">What's On</p>
		<p class="text-sm hidden lg:block">See all on-going events</p>
	</div>
</button>
<dialog id="my_modal_6" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<div class="relative bg-white p-5 rounded-xl">
			<div class="flex items-center justify-between border-b rounded-t dark:border-gray-600">
				<div class="flex items-center justify-between border-b rounded-t dark:border-gray-600">
					<h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
						What's On
					</h3>
					<form method="dialog">
						<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
					</form>
				</div>
			</div>
			<div class="p-4 md:p-5 space-y-4">
				<!-- Tab buttons -->
				<div class="mb-4 sticky top-0 bg-white">
					<ul
						class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center WOp-4"
						id="default-tab"
					>
						<li class="me-2">
							<button
								class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
								id="balizooWO-tab"
								on:click={() => switchTab('balizooWO')}
								class:active={activeTab === 'balizooWO'}
								type="button"
								
								aria-selected={activeTab === 'balizooWO'}>Bali Zoo</button
							>
						</li>
						<li class="me-2">
							<button
								class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
								id="balifarmWO-tab"
								on:click={() => switchTab('balifarmWO')}
								class:active={activeTab === 'balifarmWO'}
								type="button"
								aria-controls="balifarmWO"
								aria-selected={activeTab === 'balifarmWO'}>Bali Farm House</button
							>
						</li>
						<li class="me-2">
							<button
								class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
								id="balisafariWO-tab"
								on:click={() => switchTab('balisafariWO')}
								class:active={activeTab === 'balisafariWO'}
								type="button"
								
								aria-selected={activeTab === 'balisafariWO'}>Bali Safari</button
							>
						</li>
						<li class="me-2">
							<button
								class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
								id="balibirdWO-tab"
								on:click={() => switchTab('balibirdWO')}
								class:active={activeTab === 'balibirdWO'}
								type="button"
								
								aria-selected={activeTab === 'balibirdWO'}>Bali Bird Park</button
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
						id="balizooWO"
						aria-labelledby="balizooWO-tab"
						hidden={activeTab !== 'balizooWO'}
					>
						<div
							class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 WOp-2 w-full"
						>
							<!-- Svelte loop for products -->
							{#each explorerWO as product}
								{#if product?.type === "What's On"}
									<div>
										<a data-sveltekit-preload-data href={`/vendor/${product?.vendor.slug}/${product?.slug}`} >
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
												data-sveltekit-preload-data
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
						id="balifarmWO"
						aria-labelledby="balifarmWO-tab"
						hidden={activeTab !== 'balifarmWO'}
					>
						<div
							class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 WOp-2 w-full"
						>
							<!-- Svelte loop for products -->
							{#each balifarmWO as product}
								{#if product?.type === "What's On"}
									<div>
										<a data-sveltekit-preload-data href={`/vendor/${product?.vendor.slug}/${product?.slug}`}>
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
												data-sveltekit-preload-data
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
						id="balisafariWO"
						aria-labelledby="balisafariWO-tab"
						hidden={activeTab !== 'balisafariWO'}
					>
						<div
							class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 WOp-2 w-full"
						>
							<!-- Svelte loop for products -->
							{#each balisafariWO as product}
								{#if product?.type === "What's On"}
									<div>
										<a data-sveltekit-preload-data href={`/vendor/${product?.vendor.slug}/${product?.slug}`}>
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
												data-sveltekit-preload-data
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
						id="balibirdWO"
						aria-labelledby="balibirdWO-tab"
						hidden={activeTab !== 'balibirdWO'}
					>
						<div
							class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 WOp-2 w-full"
						>
							<!-- Svelte loop for products -->
							{#each balibirdWO as product}
								{#if product?.type === "What's On"}
									<div>
										<a data-sveltekit-preload-data href={`/vendor/${product?.vendor.slug}/${product?.slug}`}>
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
												data-sveltekit-preload-data
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
	</div>
</dialog>
