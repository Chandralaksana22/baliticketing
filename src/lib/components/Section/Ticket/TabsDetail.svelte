<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
	export let data: any = [];
</script>

<Tabs tabStyle="underline">
	<TabItem open title="Highlight">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			{@html data.highlight}
		</p>
	</TabItem>
	<TabItem title="Inclusion">
		{#if data?.inclusion.length > 0}
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
		{:else}
			<p class="text-sm font-semibold mt-3">
				Details regarding the inclusions provided with each ticket are available, ensuring that all
				relevant information is presented for your convenience and clarity.
			</p>
		{/if}
	</TabItem>
	<TabItem title="Facilities">
		<div class="grid grid-cols-5 gap-4">
			{#each data.facilities as facility}
				<div class="flex flex-col items-center justify-center p-4">
					<img src={facility.path} alt={facility.title} class="w-8 h-8 mb-2" />
					<p class="text-sm text-center">{facility.title}</p>
				</div>
			{/each}
		</div>
	</TabItem>
	<TabItem title="Location">
		<div class="flex mb-5">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"
				><path
					d="M16 2C13.0836 2.00331 10.2877 3.1633 8.22548 5.22548C6.1633 7.28766 5.00331 10.0836 5 13C5 22.4125 15 29.5213 15.4263 29.8188C15.5944 29.9365 15.7947 29.9997 16 29.9997C16.2053 29.9997 16.4056 29.9365 16.5737 29.8188C17 29.5213 27 22.4125 27 13C26.9967 10.0836 25.8367 7.28766 23.7745 5.22548C21.7123 3.1633 18.9164 2.00331 16 2ZM16 9C16.7911 9 17.5645 9.2346 18.2223 9.67412C18.8801 10.1136 19.3928 10.7384 19.6955 11.4693C19.9983 12.2002 20.0775 13.0044 19.9231 13.7804C19.7688 14.5563 19.3878 15.269 18.8284 15.8284C18.269 16.3878 17.5563 16.7688 16.7804 16.9231C16.0044 17.0775 15.2002 16.9983 14.4693 16.6955C13.7384 16.3928 13.1136 15.8801 12.6741 15.2223C12.2346 14.5645 12 13.7911 12 13C12 11.9391 12.4214 10.9217 13.1716 10.1716C13.9217 9.42143 14.9391 9 16 9Z"
					fill="#161616"
				></path></svg
			>
			<p class="ms-2">
				{data?.vendor?.address}
			</p>
		</div>
	</TabItem>
</Tabs>
