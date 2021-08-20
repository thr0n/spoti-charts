<script lang="ts">
	export let name: string;
	import { onMount } from 'svelte'
	import { getFavoriteArtists } from './services/Spotify'

	let artists = []

	onMount(async () => {
		const res = await getFavoriteArtists()
		console.log(res)
		artists = res
	})
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{#each artists as artist}
		<li>
			{artist.name}
		</li>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>