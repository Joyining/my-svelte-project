<script>
    import { userAnswer, userAnswers, numberOfGuess, hint, answer } from './store'
    import { VALID_GUESSES } from './constants/validGuesses'
    import { CORRECT, WRONG_POSITION, WRONG } from './constants/validationTypes'
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
            userAnswers.update(a => {
                const temp = $userAnswers
                temp[$numberOfGuess] = $userAnswer
                return temp
            })
            console.log($userAnswer)
        } else {
            if($userAnswer.length === 5) return
            userAnswer.update(a => a += char)
            userAnswers.update(a => {
                const temp = $userAnswers
                temp[$numberOfGuess] = $userAnswer
                return temp
            })
            console.log($userAnswer)
        }
    }

    const validateAnswer = (a) => {
        console.log(a)
        if(VALID_GUESSES.indexOf(a) < 0) {
            console.log('Not In Word List!!')
            return
        }
        const localHint = []
        for (var i = 0; i < a.length; i++) {
            console.log(a[i]);
            if(a[i] === $answer[i]) {
                localHint.push(CORRECT)
            } else if ($answer.indexOf(a[i]) >= 0) {
                localHint.push(WRONG_POSITION)
            } else {
                localHint.push(WRONG)
            }
        }
        hint.update(a => {
            const temp = $hint
            temp[$numberOfGuess] = localHint
            return temp
        })
        if(a === $answer) {
            console.log('Good Job!!')
            return
        }
        userAnswer.set('')
        numberOfGuess.update(a => a += 1) 
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