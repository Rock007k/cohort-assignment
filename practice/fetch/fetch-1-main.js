import getUserData from './fetch-1.js';

const button = document.querySelector('button');
button.addEventListener('click', getUserData);