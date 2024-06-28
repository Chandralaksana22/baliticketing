<nav
	class="px-2 sm:px-4 py-2.5 hidden md:block fixed w-full top-0 left-0 bg-transparent bg-gradient-to-b from-black to-transparent"
	style="z-index: 99;"
>
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a class="flex items-center space-x-3 rtl:space-x-reverse" href="/">
			<img src="/images/logo.png" class="h-16" />
		</a>
		<div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
			<button
				type="button"
				class="text-white border border-gray-300 boldfont bg-transparentfont-medium rounded-lg text-sm px-4 py-2 text-center hover:bg-white hover:text-black"
				>Enquire</button
			>
			<button
				data-collapse-toggle="navbar-cta"
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-cta"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
		</div>
		<div
			class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
			id="navbar-cta"
		>
			<ul
				class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
			>
				<li>
					<a class="block boldfont py-2 px-3 md:p-0 text-white rounded" href="/">Home</a>
				</li>
				<li>
					<button
						id="dropdownNavbarLink"
						data-dropdown-toggle="dropdownNavbar"
						class="flex items-center justify-between w-fullblock boldfont py-2 px-3 md:p-0 text-white rounded"
						>Places to go
						<svg
							class="w-2.5 h-2.5 ms-2.5"
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
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					<div id="dropdownNavbar" class="z-10 hidden font-normal bg-white rounded-lg w-52">
						<ul class="py-2 px-3 text-sm" aria-labelledby="dropdownLargeButton">
							<!-- Dynamic links will go here -->
							<li>
								<a class="block text-sm boldfont text-black"> </a>
							</li>
						</ul>
					</div>
				</li>
				<li>
					<a class="block boldfont py-2 px-3 md:p-0 text-white rounded" href="/ticket">Tickets </a>
				</li>
				<li>
					<a class="block boldfont py-2 px-3 md:p-0 text-white rounded" href="/contact">Contact </a>
				</li>
			</ul>
		</div>
	</div>
</nav>
