<script lang="ts">
	import type { PageServerData } from './$types';
	import VendorHome from '$lib/components/Section/VendorHome.svelte';
	import BaliFarmHome from '$lib/components/Section/BaliFarmHome.svelte';
	import BaliZooHome from '$lib/components/Section/BaliZooHome.svelte';
	import BaliBirdParkHome from '$lib/components/Section/BaliBirdParkHome.svelte';
	import BaliSafariHome from '$lib/components/Section/BaliSafariHome.svelte';
    import OpeningHourModal from '$lib/components/Modal/OpeningHour.svelte'
    import ZooMapModalHome from '$lib/components/Modal/ZooMapModalHome.svelte';
    import GeneralAdmissionModal from '$lib/components/Modal/GeneralAdmissionModal.svelte'
	import WhatsOnModal from '$lib/components/Modal/WhatsOnModalHome.svelte';
	export let data: PageServerData;

	let vendor = data?.vendor;
    let balifarm = data?.balifarm;
    let balizoo = data?.balizoo;
    let balibird = data?.balibird
    let balisafari = data?.balisafari
	
</script>

<section class="bg-cover bg-[url('/images/bg-desktop.png')]">

	<div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
		<div id="feature">
			<h5 class="text-center font-bold text-white text-2xl boldfont pt-20">Places To Go</h5>
			<div class="grid grid-cols-1 lg:grid-cols-12 py-5 gap-6">
				<VendorHome data={vendor} />
			</div>
		</div>
	</div>
</section>
