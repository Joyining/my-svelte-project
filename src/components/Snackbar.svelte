<script>
	import { fade } from 'svelte/transition';
    import { snackbarMessage } from '../store.js';
</script>

{#if $snackbarMessage}
	<p transition:fade>
		{$snackbarMessage}
	</p>
{/if}

<style>
    p {
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%, -30%);
        padding: 10px 30px;
        font-size: 24px;
        background-color: #dcd5c2;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 8px;
    }
</style>