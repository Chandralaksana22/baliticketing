<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper, { Navigation } from 'swiper';
	import 'swiper/swiper-bundle.css';

	export let data: any = [];

	onMount(() => {
		const swiper = new Swiper('.mySwiper', {
			modules: [Navigation],
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});
</script>

<div class="relative">
	<div class="swiper mySwiper">
		<div class="swiper-wrapper">
			{#each data as item}
				{#if item?.type === 'General Admission'}
					<div class="swiper-slide">
						<div class="relative">
							<img
								src={item?.images[0]?.path}
								class="h-[100vh] w-full object-cover filter brightness-50"
								alt="images"
							/>
						</div>
						<div
							class="absolute z-50 top-[6rem] left-1/2 -translate-x-1/2 text-center w-full text-white"
						>
							<h1 class="boldfont text-3xl">{item?.name}</h1>
						</div>
						<div
							class="absolute z-50 bottom-[6rem] left-1/2 -translate-x-1/2 text-center w-full text-white"
						>
							<a
								data-sveltekit-reload
								href={`/vendor/${item?.vendor.slug}/${item?.slug}`}
								class="px-2 py-3 bg-white text-black rounded-md slide boldfont">View Detail</a
							>
						</div>
					</div>
				{/if}
			{/each}
		</div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
	</div>
</div>

<style>
	.swiper-button-next,
	.swiper-button-prev {
		color: #fff !important;
		height: 35px !important;
		width: 35px !important;
		background-color: rgba(0, 0, 0, 0.5) !important;
		border-radius: 100% !important;
		padding: 2% !important;
	}
	.swiper-button-next:after,
	.swiper-button-prev:after {
		font-size: 12px !important;
	}
</style>
