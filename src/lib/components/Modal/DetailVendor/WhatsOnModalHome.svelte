<script lang="ts">
	export let explorerWO: any = [];
	const filteredWO = explorerWO.filter((product) => product?.type === "What's On");
</script>

<button
	onclick="my_modal_6.showModal()"
	class="flex flex-col lg:flex-row items-center text-center lg:text-left wo"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-[48px] lg:h-[65px]"
		viewBox="0 0 64 65"
		fill="none"
	>
		<path
			d="M52 8.5H46V6.5C46 5.96957 45.7893 5.46086 45.4142 5.08579C45.0391 4.71071 44.5304 4.5 44 4.5C43.4696 4.5 42.9609 4.71071 42.5858 5.08579C42.2107 5.46086 42 5.96957 42 6.5V8.5H22V6.5C22 5.96957 21.7893 5.46086 21.4142 5.08579C21.0391 4.71071 20.5304 4.5 20 4.5C19.4696 4.5 18.9609 4.71071 18.5858 5.08579C18.2107 5.46086 18 5.96957 18 6.5V8.5H12C10.9391 8.5 9.92172 8.92143 9.17157 9.67157C8.42143 10.4217 8 11.4391 8 12.5V52.5C8 53.5609 8.42143 54.5783 9.17157 55.3284C9.92172 56.0786 10.9391 56.5 12 56.5H52C53.0609 56.5 54.0783 56.0786 54.8284 55.3284C55.5786 54.5783 56 53.5609 56 52.5V12.5C56 11.4391 55.5786 10.4217 54.8284 9.67157C54.0783 8.92143 53.0609 8.5 52 8.5ZM42.415 33.915L30.415 45.915C30.2293 46.101 30.0087 46.2485 29.7659 46.3491C29.5231 46.4498 29.2628 46.5016 29 46.5016C28.7372 46.5016 28.4769 46.4498 28.2341 46.3491C27.9913 46.2485 27.7707 46.101 27.585 45.915L21.585 39.915C21.2097 39.5397 20.9989 39.0307 20.9989 38.5C20.9989 37.9693 21.2097 37.4603 21.585 37.085C21.9603 36.7097 22.4693 36.4989 23 36.4989C23.5307 36.4989 24.0397 36.7097 24.415 37.085L29 41.6725L39.585 31.085C39.7708 30.8992 39.9914 30.7518 40.2342 30.6512C40.477 30.5506 40.7372 30.4989 41 30.4989C41.2628 30.4989 41.523 30.5506 41.7658 30.6512C42.0086 30.7518 42.2292 30.8992 42.415 31.085C42.6008 31.2708 42.7482 31.4914 42.8488 31.7342C42.9494 31.977 43.0011 32.2372 43.0011 32.5C43.0011 32.7628 42.9494 33.023 42.8488 33.2658C42.7482 33.5086 42.6008 33.7292 42.415 33.915ZM12 20.5V12.5H18V14.5C18 15.0304 18.2107 15.5391 18.5858 15.9142C18.9609 16.2893 19.4696 16.5 20 16.5C20.5304 16.5 21.0391 16.2893 21.4142 15.9142C21.7893 15.5391 22 15.0304 22 14.5V12.5H42V14.5C42 15.0304 42.2107 15.5391 42.5858 15.9142C42.9609 16.2893 43.4696 16.5 44 16.5C44.5304 16.5 45.0391 16.2893 45.4142 15.9142C45.7893 15.5391 46 15.0304 46 14.5V12.5H52V20.5H12Z"
			fill="white"
		/>
	</svg>
	<div>
		<p class="font-bold text-sm lg:text-lg">What's On</p>
		<p class="text-sm hidden lg:block">See all on-going events</p>
	</div>
</button>
<dialog id="my_modal_6" class="modal">
	<div class="modal-box w-11/12 max-w-5xl">
		<div class="relative bg-white p-5 rounded-xl">
			<div class="flex items-center justify-between border-b rounded-t dark:border-gray-600">
				<h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
					What's On
				</h3>
				<form method="dialog">
					<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
			</div>
			<div class="p-4 md:p-5 space-y-4">
				{#if filteredWO.length === 0}
					<div class="flex items-center justify-center p-4 h-[50vh] mx-auto rounded-lg bg-gray-100">
						<div class="text-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="101"
								height="100"
								viewBox="0 0 101 100"
								fill="none"
								class="mx-auto mb-4"
							>
								<path
									d="M81.75 12.5H72.375V9.375C72.375 8.5462 72.0458 7.75134 71.4597 7.16529C70.8737 6.57924 70.0788 6.25 69.25 6.25C68.4212 6.25 67.6263 6.57924 67.0403 7.16529C66.4542 7.75134 66.125 8.5462 66.125 9.375V12.5H34.875V9.375C34.875 8.5462 34.5458 7.75134 33.9597 7.16529C33.3737 6.57924 32.5788 6.25 31.75 6.25C30.9212 6.25 30.1263 6.57924 29.5403 7.16529C28.9542 7.75134 28.625 8.5462 28.625 9.375V12.5H19.25C17.5924 12.5 16.0027 13.1585 14.8306 14.3306C13.6585 15.5027 13 17.0924 13 18.75V81.25C13 82.9076 13.6585 84.4973 14.8306 85.6694C16.0027 86.8415 17.5924 87.5 19.25 87.5H81.75C83.4076 87.5 84.9973 86.8415 86.1694 85.6694C87.3415 84.4973 88 82.9076 88 81.25V18.75C88 17.0924 87.3415 15.5027 86.1694 14.3306C84.9973 13.1585 83.4076 12.5 81.75 12.5ZM28.625 18.75V21.875C28.625 22.7038 28.9542 23.4987 29.5403 24.0847C30.1263 24.6708 30.9212 25 31.75 25C32.5788 25 33.3737 24.6708 33.9597 24.0847C34.5458 23.4987 34.875 22.7038 34.875 21.875V18.75H66.125V21.875C66.125 22.7038 66.4542 23.4987 67.0403 24.0847C67.6263 24.6708 68.4212 25 69.25 25C70.0788 25 70.8737 24.6708 71.4597 24.0847C72.0458 23.4987 72.375 22.7038 72.375 21.875V18.75H81.75V31.25H19.25V18.75H28.625ZM81.75 81.25H19.25V37.5H81.75V81.25Z"
									fill="#BABABA"
								/>
							</svg>
							<p class="text-gray-700">No data available for the selected product.</p>
						</div>
					</div>
				{:else}
					<div
						class="overflow-y-auto h-[50vh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 WOp-2 w-full"
					>
						{#each filteredWO as product}
							<div>
								<a data-sveltekit-reload href={`/vendor/${product?.vendor?.slug}/${product?.slug}`}>
									<img
										class="rounded-none h-[25vh] object-cover w-full object-top"
										src={product?.images[0].path}
										alt={product?.name}
									/>
								</a>
								<div class="p-2 text-center">
									<h5 class="mb-2 text-md font-bold tracking-tight truncate text-gray-900">
										{product?.name}
									</h5>
									<a
										data-sveltekit-reload
										href={`/vendor/${product?.vendor?.slug}/${product?.slug}`}
										class="bg-yellow p-2 text-black rounded-lg text-sm">See Details</a
									>
								</div>
							</div>
						{/each}
					</div>
				{/if}
			</div>
		</div>
	</div>
</dialog>
