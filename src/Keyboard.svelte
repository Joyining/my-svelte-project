<script>
    const row0 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const row1 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const row2 = ['Z', 'X', 'C', 'V', 'B', 'B', 'M']
</script>

<div class="wrap">
    <div class="row">
        {#each row0 as char, i}
            <button>{char}</button>
        {/each} 
    </div>
    <div class="row">
        {#each row1 as char, i}
            <button>{char}</button>
        {/each}
    </div>
    <div class="row">
        <button class="special-key">Enter</button>
        {#each row2 as char, i}
            <button>{char}</button>
        {/each}
        <button class="special-key">Back</button>
    </div>
</div>

<style>
    .wrap {
        margin-top: 20px;
    }
    .special-key {
        width: 50px;
    }
    button {
        width: 30px;
        height: 40px;
        margin: 2px;
    }
</style>