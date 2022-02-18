import { writable, readable } from 'svelte/store';
import { WORDS } from './constants/wordList'

export const latestGuess = writable('');
export const guesses = writable([]);
export const numberOfGuess = writable(0);
export const validations = writable([]);
export const answer = readable(WORDS[Math.floor(Math.random() * WORDS.length)]);