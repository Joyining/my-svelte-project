<script>
	import { answer } from './store'
	import Header from './Header.svelte'
	import Board from './Board.svelte'
	import Keyboard from './Keyboard.svelte'

	console.log($answer)
</script>

<main>
	<Header />
	<Board maxWordLength={5} maxChallenges={6}/>
	<Keyboard />
</main>

<style>
	main {
	 	text-align: center;
		max-width: 240px;
		height: 100vh;
		margin: 0 auto;
		background-color: #041414;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>