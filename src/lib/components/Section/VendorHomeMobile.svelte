<script lang="ts">
	export let data: any = [];
    
	$: items = data ?? [];
</script>

{#each items as vendor}
	<div class="feature-port">
		<a
			data-sveltekit-preload-code="eager"
			href={`/vendormobile/${vendor.slug}`}
			class="vendor-port"
		>
			<img loading="lazy"
			style="height: 25vh!important;"
				src={vendor.images.length > 0
					? vendor.images[1].path
					: 'https://dashboard.bali-zoo.com/storage/photos/shares/Animals/Lion/Lion.jpg'}
				alt={vendor.name}
			/>
			<div>
				<div
					class="px-10 text-white"
					style="position: absolute;top: 30%;">
					<h3 class="text-xl boldfont text-[#FFD600] mb-5">{vendor.name}</h3>
					<div class="text-lg line-clamp-3">{vendor.short_desc}</div>
				</div>
			</div>
		</a>
	</div>
{/each}
