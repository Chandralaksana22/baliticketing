<script lang="ts">
	export let ticketVendor: any = [];
</script>

<div>
	{#each ticketVendor as ticket}
		<a data-sveltekit-reload 
			href={`/vendor/${ticket.vendor.slug}/${ticket.slug}`}
			class="grid grid-cols-3 gap-3 pt-5 items-start"
			style="border-bottom: 1px solid rgb(156, 163, 175);"
		>
			<div class="col-span-1">
				<img
					src={ticket?.images[0]?.path}
					alt={ticket?.images[0]?.path}
					class="rounded-2xl h-[130px] w-[130px] object-cover"
				/>
			</div>
			<div class="col-span-2">
				<button class="bg-[#926000] rounded-lg p-2 font-bold text-white text-xs uppercase"
					>{ticket.vendor?.name}</button
				>
				<!-- <div class="grid grid-cols-2 mt-2 gap-1">
					<button class="bg-[#FFD600] rounded-lg px-2 py-1 text-black text-[10px] font-bold"
						>#1 Selling ticket</button
					><button class="bg-transparent text-blue text-[10px] font-bold"
						>Booked 6 times today</button
					>
				</div> -->
				<div class="my-5">
					<h2 class="text-xs text-gray-400 font-bold">{ticket?.vendor?.name}</h2>
					<h1 class="text-lg text-black font-bold">{ticket?.name}</h1>
					<p class="text-xs text-gray-600 line-through">From Rp {ticket?.adult_price}</p>
					<p class="text-md text-[#EF681C] font-bold">
						From Rp { Math.round(ticket.adult_price - (ticket.adult_price * ticket.discount_percentage / 100)) }<span class="text-sm text-black">/person</span>
					</p>
				</div>
			</div>
		</a>
	{/each}
</div>
