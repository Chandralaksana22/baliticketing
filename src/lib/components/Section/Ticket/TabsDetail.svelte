<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
	export let data: any = [];
</script>

<Tabs tabStyle="underline">
	<TabItem open title="Highliht">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			{@html data.highlight}
		</p>
	</TabItem>
	<TabItem title="Inclusion">
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
	</TabItem>
	<TabItem title="Facilities">
		<div class="grid grid-cols-5 gap-4">
			{#each data.facilities as facility}
				<div class="flex flex-col items-center justify-center p-4">
					<img src={facility.path} alt={facility.title} class="w-8 h-8 mb-2" />
					<p class="text-sm">{facility.title}</p>
				</div>
			{/each}
		</div>
	</TabItem>
	<TabItem title="Users">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Users:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem disabled>
		<span slot="title" class="text-gray-400 dark:text-gray-500">Disabled</span>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Disabled:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
</Tabs>
