<script>
    import { CORRECT, WRONG_POSITION, WRONG } from '../constants/validationTypes'
    export let char = '';
    export let validation = '';
</script>

<div 
    class:correct={validation === CORRECT} 
    class:wrong-position={validation === WRONG_POSITION} 
    class:wrong={validation === WRONG} 
    class="cell"> {char ?? ''}
</div>

<style>
    .cell {
        width: 45px;
        height: 45px;
        border: 2px solid #b7c1c7;
        margin: 2px;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>