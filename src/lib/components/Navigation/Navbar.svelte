<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	let vendors: any[] = [];

	onMount(async () => {
		let config = {
			method: 'get',
			maxBodyLength: Infinity,
			url: 'https://balitiket.mindimedia.com/api/v1/get-vendor',
			headers: {}
		};

		try {
			const response = await axios.request(config);
			vendors = response.data;
		} catch (error) {
			console.log(error);
		}
	});
</script>

<nav
	class="px-2 sm:px-4 py-2.5 hidden md:block fixed w-full top-0 left-0 bg-transparent bg-gradient-to-b from-black to-transparent"
	style="z-index: 99;"
>
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a data-sveltekit-reload class="flex items-center space-x-3 rtl:space-x-reverse" href="/">
			<img src="/images/logo.png" class="h-16" />
		</a>
		<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
			<button
				type="button"
				class="text-white border border-gray-300 boldfont bg-transparentfont-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-white hover:text-black"
				>Enquire</button
			>
			<button
				data-collapse-toggle="navbar-cta"
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-cta"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
		</div>
		<div
			class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
			id="navbar-cta"
		>
			<ul
				class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
			>
				<li>
					<a
						data-sveltekit-reload
						class="block boldfont py-2 px-3 md:p-0 text-white rounded"
						href="/">Home</a
					>
				</li>
				<li>
					<div class="dropdown">
						<div
							tabindex="0"
							role="button"
							class="flex items-center justify-between w-fullblock boldfont py-2 px-3 md:p-0 text-white rounded"
						>
							Places to go
							<svg
								class="w-2.5 h-2.5 ms-2.5"
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
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</div>
						<ul
							tabindex="0"
							class="dropdown-content menu bg-base-100 rounded-box z-[1] py-2 px-3 w-52 text-sm shadow"
						>
							{#each vendors as vendor}
								<li>
									<a data-sveltekit-reload href={`/vendor/${vendor.slug}`} class="block text-sm boldfont text-black"
										>{vendor.name}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				</li>
				<li>
					<a
						data-sveltekit-reload
						class="block boldfont py-2 px-3 md:p-0 text-white rounded"
						href="/ticket"
						>Tickets
					</a>
				</li>
				<li>
					<a
						data-sveltekit-reload
						class="block boldfont py-2 px-3 md:p-0 text-white rounded"
						href="/contact"
						>Contact
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
