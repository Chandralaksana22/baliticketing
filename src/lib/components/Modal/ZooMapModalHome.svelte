<script lang="ts">
	import { onMount } from 'svelte';
	export let data: any = [];

	let activeTab: string | null = null;
	let showModal = false;

	const activateTab = (slug: string) => {
		activeTab = slug;
	};

	const closeModal = () => {
		showModal = false;
	};

	const formatTime = (time: string) => {
		return time;
	};

	onMount(() => {
		if (data.length > 0) {
			activeTab = data[0].slug;
		}
	});
</script>

<button
	id="button-modal-opening"
	class="flex flex-col lg:flex-row items-center text-center lg:text-left map"
	type="button"
	onclick="my_modal_5.showModal()"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-[48px] lg:h-[65px]"
		viewBox="0 0 64 65"
		fill="none"
	>
		<path
			d="M57.23 12.9225C56.9904 12.7359 56.7115 12.6062 56.4143 12.5434C56.1172 12.4806 55.8096 12.4863 55.515 12.56L40.2325 16.38L24.895 8.71003C24.4677 8.49688 23.9782 8.44368 23.515 8.56004L7.515 12.56C7.08232 12.6682 6.69821 12.9179 6.42371 13.2694C6.1492 13.6209 6.00007 14.054 6 14.5V50.5C6.00005 50.8039 6.06935 51.1038 6.20264 51.3769C6.33594 51.6501 6.52972 51.8892 6.76927 52.0762C7.00882 52.2632 7.28783 52.3932 7.58512 52.4562C7.88242 52.5193 8.19017 52.5137 8.485 52.44L23.7675 48.62L39.105 56.29C39.3834 56.4273 39.6896 56.4991 40 56.5C40.1635 56.4999 40.3264 56.4798 40.485 56.44L56.485 52.44C56.9177 52.3319 57.3018 52.0822 57.5763 51.7307C57.8508 51.3792 57.9999 50.946 58 50.5V14.5C58.0001 14.1958 57.9307 13.8957 57.7973 13.6223C57.6639 13.3489 57.4699 13.1096 57.23 12.9225ZM24 44.5C23.8365 44.5001 23.6736 44.5203 23.515 44.56L10 47.9375V16.0625L23.7675 12.62L24 12.735V44.5ZM54 48.9375L40.2325 52.38L40 52.265V20.5C40.1634 20.5008 40.3263 20.4814 40.485 20.4425L54 17.0625V48.9375Z"
			fill="#BF9500"
		/>
	</svg>
	<div>
		<p class="font-bold text-sm lg:text-lg">Zoo Map</p>
		<p class="text-sm hidden lg:block">Access all zoo maps</p>
	</div>
</button>
<dialog id="my_modal_5" class="modal">
	<div class="relative bg-white p-5 rounded-xl">
		<div class="flex items-center justify-between border-b rounded-t dark:border-gray-600">
			<h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">Zoo Map</h3>
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			</form>
		</div>
		<div class="p-4 md:p-5 space-y-4">
			<div class="mb-4">
				<ul
					class="block lg:flex flex-wrap justify-center -mb-px text-sm font-medium text-center gap-4"
					id="default-tab"
					data-tabs-toggle="#default-tab-content"
				>
					{#each data as vendor}
						<li>
							<button
								class="inline-block mb-2 w-full p-2 px-5 tab-button rounded-lg"
								data-tabs-target={'#' + vendor?.slug}
								type="button"
								aria-controls={vendor?.slug}
								aria-selected={activeTab === vendor?.slug ? 'true' : 'false'}
								on:click={() => activateTab(vendor?.slug)}
							>
								{vendor?.name}
							</button>
						</li>
					{/each}
				</ul>
			</div>
			<div id="default-tab-content">
				{#each data as vendor}
					<div
						id={vendor?.slug}
						class="{activeTab === vendor?.slug
							? 'block'
							: 'hidden'} p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
						aria-labelledby={vendor?.slug}
					>
						<img
							class="rounded-t-lg mx-auto h-[25rem] object-contain"
							src="/images/maps.jpeg"
							alt=""
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</dialog>
