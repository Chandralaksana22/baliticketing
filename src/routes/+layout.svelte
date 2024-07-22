<script lang="ts">
    import 'flowbite/dist/flowbite.css';
	import { onMount } from 'svelte';
	import '../assets/scss/main.scss';
	import Navbar from '$lib/components/Navigation/Navbar.svelte';
	import Footer from '$lib/components/Navigation/Footer.svelte';
</script>
<main class="cursor-default">
	<slot />
</main>
<Footer/>
