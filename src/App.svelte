<script>
	import { answer } from './store'
	import Header from './components/Header.svelte'
	import Board from './components/Board.svelte'
	import Keyboard from './components/Keyboard.svelte'
	import Snackbar from './components/Snackbar.svelte'
	console.log($answer)
</script>

<main>
	<Header />
	<Board maxWordLength={5} maxChallenges={6} />
	<Keyboard />
	<Snackbar />
</main>

<style>
	main {
		position: relative;
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
	:global(.correct) {
        background-color:#43ba48 ;
    }
    :global(.wrong-position) {
        background-color:#e99920 ;
    }
    :global(.wrong) {
        background-color: #6c7e87;
    }
</style>