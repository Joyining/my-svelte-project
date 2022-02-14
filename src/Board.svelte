<script>
    import Cell from './Cell.svelte'
    import { userAnswers, hint } from './store'
	export let maxWordLength;
    export let maxChallenges;
</script>

{#each {length: maxChallenges} as _, i}
    <div class="row">
        {#each {length: maxWordLength} as _, j}
            <Cell char={$userAnswers[i]?.[j]} validation={$hint[i]?.[j]}/>
        {/each}
    </div>
{/each}

<style>
    .row {
        display: flex;
    }
</style>