<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper, { Navigation } from 'swiper';
	import 'swiper/swiper-bundle.css';

	export let productsData: any = [];

	let oddProducts: any[] = [];
	let evenProducts: any[] = [];

	onMount(() => {
		oddProducts = productsData?.daily_schedule.filter((_, index) => index % 2 !== 0);
		evenProducts = productsData?.daily_schedule.filter((_, index) => index % 2 === 0);

		const swiper1 = new Swiper('.mySwiper1', {
			modules: [Navigation],
			navigation: {
				nextEl: '.swiper-button-next1',
				prevEl: '.swiper-button-prev1'
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
					slidesPerView: 3.2,
					spaceBetween: 10
				}
			}
		});

		const swiper2 = new Swiper('.mySwiper2', {
			modules: [Navigation],
			navigation: {
				nextEl: '.swiper-button-next2',
				prevEl: '.swiper-button-prev2'
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
					slidesPerView: 3.2,
					spaceBetween: 10
				}
			}
		});
	});

	function formatTime(time: string): string {
		const date = new Date(time);
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	}
</script>

<div class="swiper mySwiper1">
	<div class="swiper-wrapper ps-10">
		{#each oddProducts as product}
			<div class="swiper-slide bg-white rounded-xl">
				<img
					src="https://main.tiketxplorer.com/storage/app/media/{product?.images_path}"
					class="h-[35vh] object-cover w-full rounded-t-xl"
					alt="Visit Jakarta"
				/>
				<div class="p-2">
					<h1 class="boldfont text-black text-center text-lg">{product?.name}</h1>
					<div class="flex">
						{#if product?.list_time.length === 0}
							<p class="text-center text-blue-500">all day</p>
						{:else}
							{#each product?.list_time as item}
								<a
									href="https://example.com/jakarta"
									class="flex items-center rounded-2xl p-1 bg-blue w-1/4 mx-auto justify-center"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										viewBox="0 0 32 32"
										fill="none"
										><path
											d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM23 17H16C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17Z"
											fill="white"
										></path></svg
									><span class="text-xs text-white">{formatTime(item?.time)}</span></a
								>
							{/each}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="swiper-button-next swiper-button-next1"></div>
	<div class="swiper-button-prev swiper-button-prev1"></div>
</div>

<div class="swiper mySwiper2 mt-10">
	<div class="swiper-wrapper ps-10">
		{#each evenProducts as product}
			<div class="swiper-slide bg-white rounded-xl">
				<img
					src="https://main.tiketxplorer.com/storage/app/media/{product?.images_path}"
					class="h-[35vh] object-cover w-full rounded-t-xl"
					alt="Visit Jakarta"
				/>
				<div class="p-2">
					<h1 class="boldfont text-black text-center text-lg">{product?.name}</h1>
					<div class="flex">
						{#if product?.list_time.length === 0}
							<p class="text-center text-blue-500">all day</p>
						{:else}
							{#each product?.list_time as item}
								<a
									href="https://example.com/jakarta"
									class="flex items-center rounded-2xl p-1 bg-blue w-1/4 mx-auto justify-center"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										viewBox="0 0 32 32"
										fill="none"
										><path
											d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C28.9964 12.5533 27.6256 9.24882 25.1884 6.81163C22.7512 4.37445 19.4467 3.00364 16 3ZM23 17H16C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16V9C15 8.73478 15.1054 8.48043 15.2929 8.29289C15.4804 8.10536 15.7348 8 16 8C16.2652 8 16.5196 8.10536 16.7071 8.29289C16.8946 8.48043 17 8.73478 17 9V15H23C23.2652 15 23.5196 15.1054 23.7071 15.2929C23.8946 15.4804 24 15.7348 24 16C24 16.2652 23.8946 16.5196 23.7071 16.7071C23.5196 16.8946 23.2652 17 23 17Z"
											fill="white"
										></path></svg
									><span class="text-xs text-white">{formatTime(item?.time)}</span></a
								>
							{/each}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="swiper-button-next swiper-button-next2"></div>
	<div class="swiper-button-prev swiper-button-prev2"></div>
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
