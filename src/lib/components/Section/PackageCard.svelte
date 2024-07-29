<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper, { Navigation } from 'swiper';
	import 'swiper/swiper-bundle.css';

	export let productsData: any = [];
	let today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

	function getEndTime(schedule) {
		let todaySchedule = schedule.find((item) => item.day === today);
		if (todaySchedule) {
			return new Date(todaySchedule.end_time).toLocaleTimeString('en-US', {
				hour: '2-digit',
				minute: '2-digit'
			});
		}
		return 'No schedule';
	}
	onMount(() => {
		const swiper = new Swiper('.mySwiperpackage', {
			modules: [Navigation],
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 10
				}
			}
		});
	});
</script>

<div class="swiper mySwiperpackage">
	<div class="swiper-wrapper">
		{#each productsData as product}
			<div class="swiper-slide">
				<div class="rounded-lg overflow-hidden">
					<img loading="lazy"
						class="filter brightness-50 rounded-lg h-[400px] w-full object-cover"
						src={product.images[0].path}
						alt="image"
					/>
					<div class="absolute top-[25%] left-1/2 -translate-x-1/2 text-center w-full px-4">
						<h5 class="boldfont text-2xl text-yellow text-center">{product.name}</h5>
						<p class="text-md text-yellow">
							Last check-in :
							{#if product?.vendor?.schedule}
								{getEndTime(product.vendor.schedule)}
							{/if}
						</p>
						<p class="mt-5 font-bold text-white">INCLUSION :</p>
						<p class="text-white">
							{product.inclusion
								.slice(0, 5)
								.map((item) => item.item)
								.join(', ')}
						</p>
					</div>
					<div class="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center w-full">
						<a
							data-sveltekit-preload-code="eager"
							href={`/vendor/${product.vendor.slug}/${product.slug}`}
							class="bg-white rounded-lg p-2 slide boldfont text-center">Book Tiket</a
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
