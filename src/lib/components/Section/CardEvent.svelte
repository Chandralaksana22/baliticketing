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
                <a href={`/vendor/${product.vendor.slug}/${product.slug}`}>
                    <div class="bg-white h-full overflow-hidden rounded-lg card-zoom-hover">
                        <div class="overflow-hidden">
                            <img src={product.images[0].path} class="rounded-t-lg h-[35vh] w-full object-cover" alt="image">
                        </div>
                        <div class="p-5">
                            <h4 class="boldfont text-center text-lg text-blue">{product.name}</h4>
                            <p class="text-sm text-center" style="font-size: 12px;">{@html product.highlight}</p>
                        </div>
                    </div>
                </a>
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
