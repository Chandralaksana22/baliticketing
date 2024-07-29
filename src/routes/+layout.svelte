<script lang="ts">
	import 'flowbite/dist/flowbite.css';
	import '../assets/scss/main.scss';
	import Footer from '$lib/components/Navigation/Footer.svelte';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

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
<Footer />
