<script lang="ts">
	export let vendorsData: any = [];
</script>
{#each vendorsData as vendor (vendor.slug)}
	<div class="relative img-border card overflow-hidden zoom-on-hover">
		<img
			class="filter brightness-50 h-[400px] object-cover"
			src={vendor.images.length > 0
				? vendor.images[1].path
				: 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'}
			alt={vendor.name}
		/>
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 text-center w-100 text-white">
			<h5 class="boldfont text-xl text-white text-center">{vendor.name}</h5>
		</div>
		<div class="absolute bottom-[5%] left-1/2 z-50 -translate-x-1/2 text-center w-100 text-white">
			<a data-sveltekit-reload="off"
				href={`/vendor/${vendor.slug}`}
				class="p-2 text-lg bg-white rounded-lg text-black slide boldfont text-center"
			>
				See Details
			</a>
		</div>
	</div>
{/each}
