import { writable, readable } from 'svelte/store';
import { WORDS } from './constants/wordList'

export const userAnswer = writable('');
export const hint = writable([]);
export const answer = readable(WORDS[Math.floor(Math.random() * WORDS.length)]);