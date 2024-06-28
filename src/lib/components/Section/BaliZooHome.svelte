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

<div class="swiper mySwiper">
	<div class="swiper-wrapper">
		{#each data as item}
			<div class="swiper-slide">
				<div class="relative">
					<img
						src={item.images[0]?.path}
						alt={item.images[0]?.path}
						class="h-[60vh] w-full object-cover filter brightness-50 rounded-[20px]"
					/>
					<div class="px-5 absolute bottom-[5%] text-white">
						<h1 class="boldfont text-yellow mb-3 text-xl">{item.name}</h1>
						<div class="mb-5 line-clamp-3">{@html item.description}</div>
						<a href={`/vendor/${item.vendor.slug}/${item.slug}`} class="px-2 py-3 bg-white text-black rounded-md slide boldfont"
							>Book Ticket</a
						>
					</div>
				</div>
				
			</div>
		{/each}
	</div>
	<div class="swiper-button-next"></div>
	<div class="swiper-button-prev"></div>
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
