<script lang="ts">
	import type { PageServerData } from './$types';
	import VendorHomeMobile from '$lib/components/Section/VendorHomeMobile.svelte';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';
	export let data: PageServerData;

	let vendor = data?.vendor;
	
</script>
<Navbar data={vendor}/>
<section class="bg-cover bg-[url('/images/bg-desktop.webp')]">

	<div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
		<div id="feature">
			<h5 class="text-center font-bold text-white text-2xl boldfont pt-20">Places To Go</h5>
			<div class="grid grid-cols-1 lg:grid-cols-12 py-5 gap-6">
				<VendorHomeMobile data={vendor} />
			</div>
		</div>
	</div>
</section>
<Footer data={vendor}/>
