<script lang="ts">
	import 'flowbite/dist/flowbite.css';
	import '../assets/scss/main.scss';
	import { onMount } from 'svelte';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	async function detectSWUpdated(){
		const registration =await navigator.serviceWorker.ready
		registration.addEventListener('updatefound', () =>{
			const newSW = registration.installing
			newSW?.addEventListener('statechange', ()=>{
				if (newSW.state === 'installed'){
					if (confirm('New Update Available ! Reload to Update')){
						newSW.postMessage({type:'SKIP_WAITING'})
						window.location.reload()
					}
				}
			})
		})
	}
	onMount(()=>{
		detectSWUpdated
	})
	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	}
</script>

<main class="cursor-default">
	<slot />
</main>
