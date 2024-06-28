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
	<div
		class="bg-center bg-cover h-[100] bg-no-repeat bg-[url('/images/Homepage-mobile.png')] lg:bg-[url('/images/bg-home.png')]"
	>
		<div class="h-[100vh] px-5 lg:px-10 container mx-auto flex items-center">
			<h1
				class="hidden lg:block mb-4 boldfont text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
			>
				EXPERIENCE <br /> <span class="text-yellow">A CLOSER LOOK</span> TO <br />
				BALI’S EXOTIC ANIMALS
			</h1>
			<h1
				class="block lg:hidden mb-4 boldfont text-center mx-auto text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
			>
				EXPERIENCE <br /> <span class="text-yellow">A CLOSER LOOK</span> <br /> TO BALI’S <br /> EXOTIC
				ANIMALS
			</h1>
		</div>
	</div>
	<div class="px-5 pb-0 lg:pb-44 lg:px-10 container mx-auto">
		<div id="feature">
			<h5 class="text-center font-bold text-white text-2xl boldfont">Places To Go</h5>
			<div class="grid grid-cols-1 lg:grid-cols-12 py-5 gap-6">
				<VendorHome data={vendor} />
			</div>
		</div>
		<div>
			<div
				class="panel-home bg-[#FFD600] p-5 lg:p-10 rounded-3xl mt-10 lg:mt-44 mb-[-20%] relative"
			>
				<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <OpeningHourModal data={vendor}/>
                    <GeneralAdmissionModal explorerGA={balizoo} balifarmGA={balifarm} balisafariGA={balisafari} balibirdGA={balibird}/>
                    <ZooMapModalHome data={vendor}/>
                    <WhatsOnModal explorerWO={balizoo} balifarmWO={balifarm} balisafariWO={balisafari} balibirdWO={balibird}/>
                </div>
			</div>
		</div>
	</div>
</section>
<section
	class="bg-cover h-[25vh] lg:h-auto bg-[url('/images/background-biru-desktop.png')]"
>
	<div class="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-4">
		<div class="col-span-7 pt-24">
			<h4 class="boldfont text-white text-3xl text-center">Explore Bali Zoo</h4>
			<div class="py-20 mx-auto px-10">
				<BaliZooHome data={balizoo}/>
			</div>
		</div>
		<div class="col-span-5 bg-[url('/images/plan.png')]">
			<div class="pt-24">
				<h4 class="boldfont text-white text-3xl text-center">
					A WELL SPENT DAY <br /> at BALI BIRD PARK
				</h4>
				<div class="py-20 px-10">
					<BaliBirdParkHome data={balibird}/>
				</div>
			</div>
		</div>
	</div>
</section>
<section>
    <div class="hidden lg:grid grid-cols-1 lg:grid-cols-12">
        <div class="col-span-5">
            <BaliFarmHome data={balifarm}/>
        </div>
        <div class="col-span-7 bg-contain bg-[url('/images/bg-hijau.png')]">
            <h4 class="boldfont pt-24  text-white text-3xl text-center">WILDLIFE ADVENTURE AT BALI SAFARI</h4>
            <div class="pt-10 mx-auto px-10">
             <BaliSafariHome data={balisafari}/>
            </div>
        </div>
    </div>
</section>