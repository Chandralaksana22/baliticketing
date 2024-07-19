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
				<div class="swiper-slide">
					<div class="relative">
						<img loading="lazy"
                            src={item?.images[0]?.path}
							alt={item?.name}
							class="h-[50vh] w-full object-cover filter brightness-50 rounded-[20px]"
						/>
					</div>
				</div>
			{/each}
		</div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
	</div>

    <div class="text-center mx-auto mt-5">
        <p class="mb-5 text-white">Pesky Parakeet Feeding</p>
        <a data-sveltekit-reload  href={`/vendor/${data[0]?.vendor?.slug}/${data[0]?.slug}`} class="px-2 py-3 bg-white text-black rounded-md slide boldfont">Book Ticket</a>
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
