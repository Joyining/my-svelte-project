import { writable, readable } from 'svelte/store';
import { WORDS } from './constants/wordList'

export const userAnswer = writable('');
export const userAnswers = writable([]);
export const numberOfGuess = writable(0);
export const hint = writable([]);
export const answer = readable(WORDS[Math.floor(Math.random() * WORDS.length)]);