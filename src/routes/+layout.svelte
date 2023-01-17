<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/tailwind.css';
</script>

<svelte:head>
	<title>SSR</title>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
	/>
</svelte:head>

<Header />

<body>
	<slot />
</body>
