<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let explorerGA: any = [];
	const filteredGA = explorerGA.filter((product) => product?.type === 'General Admission');
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
			{#if filteredGA.length === 0}
				<div class="flex items-center justify-center p-4 h-[50vh] mx-auto rounded-lg bg-gray-100">
					<div class="text-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="101"
							height="100"
							viewBox="0 0 101 100"
							fill="none"
							class="mx-auto mb-4"
						>
							<path
								d="M81.75 12.5H72.375V9.375C72.375 8.5462 72.0458 7.75134 71.4597 7.16529C70.8737 6.57924 70.0788 6.25 69.25 6.25C68.4212 6.25 67.6263 6.57924 67.0403 7.16529C66.4542 7.75134 66.125 8.5462 66.125 9.375V12.5H34.875V9.375C34.875 8.5462 34.5458 7.75134 33.9597 7.16529C33.3737 6.57924 32.5788 6.25 31.75 6.25C30.9212 6.25 30.1263 6.57924 29.5403 7.16529C28.9542 7.75134 28.625 8.5462 28.625 9.375V12.5H19.25C17.5924 12.5 16.0027 13.1585 14.8306 14.3306C13.6585 15.5027 13 17.0924 13 18.75V81.25C13 82.9076 13.6585 84.4973 14.8306 85.6694C16.0027 86.8415 17.5924 87.5 19.25 87.5H81.75C83.4076 87.5 84.9973 86.8415 86.1694 85.6694C87.3415 84.4973 88 82.9076 88 81.25V18.75C88 17.0924 87.3415 15.5027 86.1694 14.3306C84.9973 13.1585 83.4076 12.5 81.75 12.5ZM28.625 18.75V21.875C28.625 22.7038 28.9542 23.4987 29.5403 24.0847C30.1263 24.6708 30.9212 25 31.75 25C32.5788 25 33.3737 24.6708 33.9597 24.0847C34.5458 23.4987 34.875 22.7038 34.875 21.875V18.75H66.125V21.875C66.125 22.7038 66.4542 23.4987 67.0403 24.0847C67.6263 24.6708 68.4212 25 69.25 25C70.0788 25 70.8737 24.6708 71.4597 24.0847C72.0458 23.4987 72.375 22.7038 72.375 21.875V18.75H81.75V31.25H19.25V18.75H28.625ZM81.75 81.25H19.25V37.5H81.75V81.25Z"
								fill="#BABABA"
							/>
						</svg>
						<p class="text-gray-700">No data available for the selected product.</p>
					</div>
				</div>
			{:else}
				<div
					class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full"
				>
					{#each filteredGA as product}
						<div>
							<a href={`/vendor/${product?.vendor?.slug}/${product?.slug}`}>
								<img
									class="rounded-none h-[25vh] object-cover w-full object-top"
									src={product?.images[0]?.path}
									alt={product?.name}
								/>
							</a>
							<div class="p-2 text-center">
								<h5 class="mb-2 text-md font-bold truncate tracking-tight text-gray-900">
									{product?.name}
								</h5>
								<a
									href={`/vendor/${product?.vendor?.slug}/${product?.slug}`}
									class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a
								>
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</dialog>
