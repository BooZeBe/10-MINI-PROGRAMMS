const form = document.querySelector('form');
const input = document.querySelector('input');
let status = document.querySelector('h2');

form.addEventListener('submit', e => {
	e.preventDefault();

	let arrOfWords = input.value.split(' ')

	arrOfWords = arrOfWords.map(word => word.split('').reverse().join(''))

	status.innerHTML = arrOfWords.reverse().join(' ')

	form.reset();
})
