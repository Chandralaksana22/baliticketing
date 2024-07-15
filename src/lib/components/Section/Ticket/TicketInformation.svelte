<script lang="ts">
	export let data: any = [];
</script>

<div class="block lg:hidden">
	<div id="accordion-collapse" class="border border-sky-500 rounded-xl" data-accordion="collapse">
		<h2 id="accordion-collapse-heading-1">
			<button
				type="button"
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
				data-accordion-target="#accordion-collapse-body-1"
				aria-expanded="true"
				aria-controls="accordion-collapse-body-1"
			>
				<span>Highlight</span>
				<svg
					data-accordion-icon
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<div
			id="accordion-collapse-body-1"
			class="hidden"
			aria-labelledby="accordion-collapse-heading-1"
		>
			<div class="p-5">
				<p class="text-sm">
					{@html data.highlight}
				</p>
			</div>
		</div>
	</div>
	<div
		id="accordion-collapse-2"
		class="border border-sky-500 rounded-xl mt-2"
		data-accordion="collapse-2"
	>
		<h2 id="accordion-collapse-heading-2">
			<button
				type="button"
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
				data-accordion-target="#accordion-collapse-body-2"
				aria-expanded="false"
				aria-controls="accordion-collapse-body-2"
			>
				<span>Inclusion</span>
				<svg
					data-accordion-icon
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="false"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<div
			id="accordion-collapse-body-2"
			class="hidden"
			aria-labelledby="accordion-collapse-heading-2"
		>
			<div class="p-5">
				<ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
					{#each data.inclusion as item}
						<li class="flex items-center space-x-3 rtl:space-x-reverse">
							<svg
								class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 16 12"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M1 5.917 5.724 10.5 15 1.5"
								/>
							</svg>
							<span>{item.item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div
		id="accordion-collapse-3"
		class="border border-sky-500 rounded-xl mt-2"
		data-accordion="collapse-3"
	>
		<h2 id="accordion-collapse-heading-3">
			<button
				type="button"
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
				data-accordion-target="#accordion-collapse-body-3"
				aria-expanded="false"
				aria-controls="accordion-collapse-body-3"
			>
				<span>Facilities</span>
				<svg
					data-accordion-icon
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="false"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<div
			id="accordion-collapse-body-3"
			class="hidden"
			aria-labelledby="accordion-collapse-heading-3"
		>
			<div class="p-5">
				<div class="grid grid-cols-3 gap-4">
					<!-- {#each data.facilities as facility}
						<div class="flex flex-col items-center justify-center p-4">
							<img src={facility.path} alt={facility.title} class="w-8 h-8 mb-2" />
							<p class="text-sm">{facility.title}</p>
						</div>
					{/each} -->
				</div>
			</div>
		</div>
	</div>
	<div
		id="accordion-collapse-4"
		class="border border-sky-500 rounded-xl mt-2"
		data-accordion="collapse-4"
	>
		<h2 id="accordion-collapse-heading-4">
			<button
				type="button"
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
				data-accordion-target="#accordion-collapse-body-4"
				aria-expanded="false"
				aria-controls="accordion-collapse-body-4"
			>
				<span>Location</span>
				<svg
					data-accordion-icon
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="false"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<div
			id="accordion-collapse-body-4"
			class="hidden"
			aria-labelledby="accordion-collapse-heading-4"
		>
			<div class="p-5">
				<div class="flex mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
						><path
							d="M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 22.4125 15 29.5213 15.4263 29.8188C15.5944 29.9365 15.7947 29.9997 16 29.9997C16.2053 29.9997 16.4056 29.9365 16.5737 29.8188C17 29.5213 27 22.4125 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM16 9C16.7911 9 17.5645 9.2346 18.2223 9.67412C18.8801 10.1136 19.3928 10.7384 19.6955 11.4693C19.9983 12.2002 20.0775 13.0044 19.9231 13.7804C19.7688 14.5563 19.3878 15.269 18.8284 15.8284C18.269 16.3878 17.5563 16.7688 16.7804 16.9231C16.0044 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1136 15.8801 12.6741 15.2223C12.2346 14.5645 12 13.7911 12 13C12 11.9391 12.4214 10.9217 13.1716 10.1716C13.9217 9.42143 14.9391 9 16 9Z"
							fill="#161616"
						></path></svg
					>
					<p class="ms-2">
						{data?.vendor?.address}
					</p>
				</div>
				<a href="#" class="py-2 px-5 bg-blue text-white font-semibold rounded-lg">Open In Maps</a>
			</div>
		</div>
	</div>
	<div
		id="accordion-collapse-5"
		class="border border-sky-500 rounded-xl mt-2"
		data-accordion="collapse-5"
	>
		<h2 id="accordion-collapse-heading-5">
			<button
				type="button"
				class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-blue font-bold bg-transparent gap-3"
				data-accordion-target="#accordion-collapse-body-5"
				aria-expanded="false"
				aria-controls="accordion-collapse-body-5"
			>
				<span>Zoo Map</span>
				<svg
					data-accordion-icon
					class="w-3 h-3 rotate-180 shrink-0"
					aria-hidden="false"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 5 5 1 1 5"
					/>
				</svg>
			</button>
		</h2>
		<div
			id="accordion-collapse-body-5"
			class="hidden"
			aria-labelledby="accordion-collapse-heading-5"
		>
			<div class="p-5">
				<div class="flex mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						viewBox="0 0 32 32"
						fill="none"
					>
						<path
							d="M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 22.4125 15 29.5213 15.4263 29.8188C15.5944 29.9365 15.7947 29.9997 16 29.9997C16.2053 29.9997 16.4056 29.9365 16.5737 29.8188C17 29.5213 27 22.4125 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM16 9C16.7911 9 17.5645 9.2346 18.2223 9.67412C18.8801 10.1136 19.3928 10.7384 19.6955 11.4693C19.9983 12.2002 20.0775 13.0044 19.9231 13.7804C19.7688 14.5563 19.3878 15.269 18.8284 15.8284C18.269 16.3878 17.5563 16.7688 16.7804 16.9231C16.0044 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1136 15.8801 12.6741 15.2223C12.2346 14.5645 12 13.7911 12 13C12 11.9391 12.4214 10.9217 13.1716 10.1716C13.9217 9.42143 14.9391 9 16 9Z"
							fill="#161616"
						></path>
					</svg>
					<p class="ms-2">
						Jl. Raya Singapadu, Singapadu, Kec. Sukawati, Kabupaten Gianyar, Bali 80582
					</p>
				</div>
				<a href="#" class="py-2 px-5 bg-blue text-white font-semibold rounded-lg">Open In Maps</a>
			</div>
		</div>
	</div>
</div>
