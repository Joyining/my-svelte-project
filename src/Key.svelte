<script>
    import { userAnswer, hint, answer } from './store'
    import { VALID_GUESSES } from './constants/validGuesses'
    export let char;
    export let variant = '';

    console.log($answer)

    const handleOnClick = (char)=> {
        if(char === 'Enter') {
            if($userAnswer.length < 5) return
            validateAnswer($userAnswer.toLowerCase())
        } else if (char === 'Back') {
            if($userAnswer.length === 0) return
            userAnswer.update(a => a.substring(0, a.length - 1))
            console.log($userAnswer)
        } else {
            if($userAnswer.length === 5) return
            userAnswer.update(a => a += char)
            console.log($userAnswer)
        }
    }

    const validateAnswer = (a) => {
        console.log(a)
        if(a === $answer) {
            console.log('Good Job!!')
            return
        }
        if(VALID_GUESSES.indexOf(a) < 0) {
            console.log('Not In Word List!!')
            return
        }
        const localHint = []
        for (var i = 0; i < a.length; i++) {
            console.log(a[i]);
            if(a[i] === $answer[i]) {
                localHint.push(0)
            } else if ($answer.indexOf(a[i]) >= 0) {
                localHint.push(1)
            } else {
                localHint.push(2)
            }
        }
        hint.set(localHint)
        console.log($hint)
    }
</script>

<button class={variant} on:click={handleOnClick(char)}>{char}</button>

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