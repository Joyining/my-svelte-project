<script>
    import { latestGuess, guesses, numberOfGuess, validations, answer } from '../store'
    import { VALID_GUESSES } from '../constants/validGuesses'
    import { CORRECT, WRONG_POSITION, WRONG } from '../constants/validationTypes'
    export let char;
    export let variant = '';
    export let validation = '';

    const handleOnClick = (char)=> {
        if(char === 'Enter') {
            if($latestGuess.length < 5) return
            validateAnswer($latestGuess.toLowerCase())
        } else if (char === 'Back') {
            if($latestGuess.length === 0) return
            latestGuess.update(a => a.substring(0, a.length - 1))
            guesses.update(a => {
                const temp = $guesses
                temp[$numberOfGuess] = $latestGuess
                return temp
            })
        } else {
            if($latestGuess.length === 5) return
            latestGuess.update(a => a += char)
            guesses.update(a => {
                const temp = $guesses
                temp[$numberOfGuess] = $latestGuess
                return temp
            })
        }
    }

    const validateAnswer = (a) => {
        if(VALID_GUESSES.indexOf(a) < 0) {
            console.log('Not In Word List!!')
            return
        }
        const localValidation = []
        for (var i = 0; i < a.length; i++) {
            if(a[i] === $answer[i]) {
                localValidation.push(CORRECT)
            } else if ($answer.indexOf(a[i]) >= 0) {
                localValidation.push(WRONG_POSITION)
            } else {
                localValidation.push(WRONG)
            }
        }
        validations.update(a => {
            const temp = $validations
            temp[$numberOfGuess] = localValidation
            return temp
        })
        if(a === $answer) {
            console.log('Good Job!!')
            return
        }
        latestGuess.set('')
        numberOfGuess.update(a => a += 1) 
    }
</script>

<button class={`${variant} ${validation}`} on:click={handleOnClick(char)}>{char}</button>

<style>
    .large {
        width: 50px;
    }
    button {
        width: 30px;
        height: 40px;
        margin: 2px;
    }
</style>