<script>
    import Key from './Key.svelte'
    const row0 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const row1 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const row2 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
</script>

<div class="wrap">
    <div class="row">
        {#each row0 as char, i}
            <Key char={char} />
        {/each} 
    </div>
    <div class="row">
        {#each row1 as char, i}
            <Key char={char} />
        {/each}
    </div>
    <div class="row">
        <Key variant='large' char='Enter' />
        {#each row2 as char, i}
            <Key char={char} />
        {/each}
        <Key variant='large' char='Back' />
    </div>
</div>

<style>
    .wrap {
        margin-top: 20px;
    }
</style>