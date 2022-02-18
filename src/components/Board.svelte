<script>
    import Cell from './Cell.svelte'
    import { guesses, validations } from '../store'
	export let maxWordLength;
    export let maxChallenges;
</script>

{#each {length: maxChallenges} as _, i}
    <div class="row">
        {#each {length: maxWordLength} as _, j}
            <Cell char={$guesses[i]?.[j]} validation={$validations[i]?.[j]}/>
        {/each}
    </div>
{/each}

<style>
    .row {
        display: flex;
    }
</style>