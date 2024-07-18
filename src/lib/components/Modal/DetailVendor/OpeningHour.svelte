<script lang="ts">
	export let data: any = [];
</script>

<button
	id="button-modal-opening"
	class="flex flex-col lg:flex-row items-center text-center lg:text-left clock"
	type="button"
	onclick="my_modal_4.showModal()"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-[48px] lg:h-[65px]"
		viewBox="0 0 64 65"
		fill="none"
	>
		<path
			d="M32 6.5C26.8577 6.5 21.8309 8.02487 17.5552 10.8818C13.2795 13.7387 9.94702 17.7994 7.97914 22.5502C6.01127 27.3011 5.49638 32.5288 6.49959 37.5723C7.50281 42.6159 9.97907 47.2486 13.6152 50.8848C17.2514 54.5209 21.8842 56.9972 26.9277 58.0004C31.9712 59.0036 37.1989 58.4887 41.9498 56.5209C46.7007 54.553 50.7613 51.2205 53.6182 46.9448C56.4751 42.6691 58 37.6423 58 32.5C57.9927 25.6066 55.2511 18.9976 50.3767 14.1233C45.5024 9.24889 38.8934 6.50728 32 6.5ZM46 34.5H32C31.4696 34.5 30.9609 34.2893 30.5858 33.9142C30.2107 33.5391 30 33.0304 30 32.5V18.5C30 17.9696 30.2107 17.4609 30.5858 17.0858C30.9609 16.7107 31.4696 16.5 32 16.5C32.5304 16.5 33.0392 16.7107 33.4142 17.0858C33.7893 17.4609 34 17.9696 34 18.5V30.5H46C46.5304 30.5 47.0392 30.7107 47.4142 31.0858C47.7893 31.4609 48 31.9696 48 32.5C48 33.0304 47.7893 33.5391 47.4142 33.9142C47.0392 34.2893 46.5304 34.5 46 34.5Z"
			fill="#BF9500"
		/>
	</svg>
	<div>
		<p class="font-bold text-sm lg:text-lg">Opening Hour</p>
		<p class="text-sm hidden lg:block">Check all opening hour</p>
	</div>
</button>
<dialog id="my_modal_4" class="modal">
	<div class="relative bg-white rounded-xl p-5">
		<div class="flex items-center justify-between border-b rounded-t dark:border-gray-600">
			<h3 class="text-xl text-center boldfont lg:text-start font-semibold text-blue">
				Opening Hour
			</h3>
			<form method="dialog">
				<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
			</form>
		</div>
		<div class="p-4 md:p-5 space-y-4">
			<div class="grid grid-cols-2 gap-2 w-full">
				{#each data?.schedule as schedule}
					<p class="font-bold">{schedule?.day}</p>
					<p>{schedule?.start_time.slice(11, 16)} - {schedule?.end_time.slice(11, 16)}</p>
				{/each}
			</div>
		</div>
	</div>
</dialog>
