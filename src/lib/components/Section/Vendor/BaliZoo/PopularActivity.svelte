<script lang="ts">
	export let data: any = [];
</script>

<div id="placetogo" class="hidden lg:block">
	<h4 class="boldfont text-white text-3xl mb-5 text-center">Popular Activity</h4>
	<div class="grid grid-cols-3 px-10 mb-[-10%] gap-4">
		{#each data as item}
			<div class="relative">
				<div class="placetogo-port img-border hover-content">
					<img loading="lazy" src={item?.images[0]?.path} alt={item?.images[0]?.path} class="h-full" />
					<div class="cover p-5">
						<div class="detail text-center text-white">
							<h3 class="boldfont text-white text-2xl mb-1">{item?.name}</h3>
							<h3 class="sub-title text-white text-lg mb-5"></h3>
							<p class="content text-sm line-clamp-3">
								{item?.short_desc}
							</p>
						</div>
					</div>
					<div class="absolute z-50 bottom-[7%] left-1/2 -translate-x-1/2 text-center w-100">
						<a
							data-sveltekit-reload
							href={`/vendor/${item?.vendor.slug}/${item?.slug}`}
							class="bg-white rounded-lg p-2 slide boldfont text-center">Book Ticket</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
