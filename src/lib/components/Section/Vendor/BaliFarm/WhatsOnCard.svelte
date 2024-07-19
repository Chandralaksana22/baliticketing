<script lang="ts">
	export let data: any = [];
</script>

{#each data as item}
	{#if item.type === "What's On"}
		<div class="relative">
			<img loading="lazy"
				src={item.images[0].path}
				alt={item.name}
				class="h-[50vh] w-full object-cover filter brightness-50"
			/>
			<div class="absolute inset-0 flex flex-col justify-center px-10 text-white">
				<h1 class="boldfont text-yellow mb-3 text-xl">{item?.name}</h1>
				<p class="mb-5 line-clamp-3">
					{item?.short_desc}
				</p>
				<a href={`/vendor/${item.vendor.slug}/${item.slug}`} data-sveltekit-preload-data class="px-2 py-3 bg-white text-black rounded-md slide boldfont w-fit">Book Ticket</a>
			</div>
		</div>
	{/if}
{/each}
