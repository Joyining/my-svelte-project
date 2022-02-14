<script>
	export let maxWordLength;
    export let maxChallenges;
</script>

{#each {length: maxChallenges} as _, i}
    <div class="row">
        {#each {length: maxWordLength} as _, j}
        <div id={`${i}${j}`} class="cell"> </div>
        {/each}
    </div>
{/each}

<style>
    .row {
        display: flex;
    }
    .cell {
        width: 45px;
        height: 45px;
        border: 2px solid #b7c1c7;
        margin: 2px;
    }
</style>