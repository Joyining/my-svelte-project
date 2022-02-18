<script>
    import Key from './Key.svelte'
    import { guesses, validations } from '../store'
    let keys = [
        {
            Q: '',
            W: '',
            E: '',
            R: '',
            T: '',
            Y: '',
            U: '',
            I: '',
            O: '',
            P: ''
        },
        {
            A: '',
            S: '',
            D: '',
            F: '',
            G: '',
            H: '',
            J: '',
            K: '',
            L: ''
        },
        {
            Z: '',
            X: '',
            C: '',
            V: '',
            B: '',
            N: '',
            M: ''
        }
    ]

    validations.subscribe(value => {
        const latestUserAnswer = $guesses[$guesses.length - 1]
        const latestHint = value[value.length - 1]
        for (var i = 0; i < latestUserAnswer?.length; i++) {
            if(latestUserAnswer[i] in keys[0]) {
                keys[0][latestUserAnswer[i]] = latestHint[i]
                continue
            }
            if(latestUserAnswer[i] in keys[1]) {
                keys[1][latestUserAnswer[i]] = latestHint[i]
                continue
            }
            if(latestUserAnswer[i] in keys[2]) {
                keys[2][latestUserAnswer[i]] = latestHint[i]
            }
        } 
    })

</script>

<div class="wrap">
    <div class="row">
        {#each Object.entries(keys[0]) as [char, validation]}
            <Key char={char} validation={validation}/>
        {/each} 
    </div>
    <div class="row">
        {#each Object.entries(keys[1]) as [char, validation]}
            <Key char={char} validation={validation}/>
        {/each} 
    </div>
    <div class="row">
        <Key variant='large' char='Enter' />
        {#each Object.entries(keys[2]) as [char, validation]}
            <Key char={char} validation={validation}/>
        {/each} 
        <Key variant='large' char='Back' />
    </div>
</div>

<style>
    .wrap {
        margin-top: 20px;
    }
</style>