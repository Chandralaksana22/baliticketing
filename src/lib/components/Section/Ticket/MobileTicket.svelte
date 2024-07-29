<script lang="ts">
	export let listTicket: any = [];
	import CryptoJS from 'crypto-js';
	import { goto } from '$app/navigation';
	function generateSecretKey() {
		return CryptoJS.lib.WordArray.random(16).toString();
	}
	let isLoading = false;
	export function navigateToMobileTicket(listTicket: any) {
		isLoading = true;
		const secretKey = generateSecretKey();
		const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(listTicket), secretKey).toString();
		sessionStorage.setItem('item', encryptedData);
		sessionStorage.setItem('key', secretKey);
		const url = `/vendormobile/${listTicket.vendor.slug}/${listTicket.product.slug}`;
		goto(url).then(() => {
			isLoading = false; // Set loading to false after navigation
		});
	}
	function formatNumber(number) {
		return new Intl.NumberFormat('id-ID').format(number);
	}
</script>

{#if isLoading}
	<div class="loading-overlay">Loading Ticket...</div>
{/if}
<div>
	{#each listTicket as listTicket}
		<!-- svelte-ignore a11y-invalid-attribute -->
		<a
			href="#"
			on:click|preventDefault={() => navigateToMobileTicket(listTicket)}
			class="grid grid-cols-3 gap-3 pt-5 px-3 items-start"
			style="border-bottom: 1px solid rgb(156, 163, 175);"
		>
			<div class="col-span-1">
				<img
					src={listTicket?.images[0]?.path}
					alt={listTicket?.images[0]?.path}
					class="rounded-2xl h-[130px] w-[130px] object-cover"
				/>
			</div>
			<div class="col-span-2">
				<button class="bg-[#926000] rounded-lg p-2 font-bold text-white text-xs capitalize "
					>{listTicket.vendor?.name}</button
				>
				<!-- <div class="grid grid-cols-2 mt-2 gap-1">
					<button class="bg-[#FFD600] rounded-lg px-2 py-1 text-black text-[10px] font-bold"
						>#1 Selling listTicket</button
					><button class="bg-transparent text-blue text-[10px] font-bold"
						>Booked 6 times today</button
					>
				</div> -->
				<div class="my-5">
					<h2 class="text-xs text-gray-400 font-bold">{listTicket?.vendor?.name}</h2>
					<h1 class="text-md text-black truncate capitalize  font-bold">{listTicket?.name}</h1>
					<p class="text-xs text-gray-600 line-through">From Rp {listTicket?.adult_price}</p>
					<p class="text-md text-[#EF681C] font-bold">
						From Rp {formatNumber(
							Math.round(
								listTicket.adult_price -
								(listTicket.adult_price * listTicket.discount_percentage) / 100
							)
						)}<span class="text-sm text-black">/person</span>
					</p>
				</div>
			</div>
		</a>
	{/each}
</div>

<style>
	.loading-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
	}
</style>
