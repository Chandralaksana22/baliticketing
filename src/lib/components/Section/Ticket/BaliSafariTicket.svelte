<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper, { Navigation } from 'swiper';
	import 'swiper/swiper-bundle.css';

	export let productsData: any = [];

	onMount(() => {
		const swiper = new Swiper('.mySwiper', {
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

<div class="swiper mySwiper">
	<div class="swiper-wrapper">
		{#each productsData as product}
			<div class="swiper-slide">
				<div class="hover-content relative">
					<div class="placetogo-port" data-cursor="pointer2" style="height: 100%;">
						<img
							src={product.images[0].path}
							class="filter brightness-50"
							alt=""
							style="height: 15rem;"
						/>
						<div class="cover p-5">
							<div class="detail text-white">
								<h5 class="boldfont text-white text-xl mb-5">{product.name}</h5>
								<p class="content text-md line-clamp-3" style="font-size: 12px;">
									{@html product.description}
								</p>
							</div>
						</div>
						<div class="z-20 absolute bottom-[5%] left-[5%]">
							<a data-sveltekit-reload 
								href={`/vendor/${product.vendor.slug}/${product.slug}`}
								class="bg-white rounded-lg p-2 slide boldfont text-center">Book Ticket</a
							>
						</div>
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
