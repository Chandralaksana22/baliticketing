<script lang="ts">
	export let data: any = [];
</script>

<div class="flex flex-col gap-4">
	{#each data as product}
    {#if product.type === "What's On"}
		<div class="gap-4 rounded-xl border-2 border-white backdrop-blur-sm bg-white/30 h-fit p-5">
			<div class="flex justify-between items-center">
				<h1 class="text-white font-semibold text-xl">{product.name}</h1>
				<a
					data-sveltekit-preload-code="eager"
					href={`/vendor/${product.vendor.slug}/${product.slug}`}
					class="p-2 boldfont text-xs bg-white text-black rounded-lg w-fit float-end">Book Ticket</a
				>
			</div>
			<p class="mt-5 text-sm text-white line-clamp-2">
				{product?.short_desc}
			</p>
		</div>
    {/if}
	{/each}
</div>
