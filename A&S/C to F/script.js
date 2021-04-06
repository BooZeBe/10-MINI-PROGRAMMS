const formC = document.querySelector('#getCForm');
const inputС = document.querySelector('#getCInput');
let statusС = document.querySelector('#getCStatus');

formC.addEventListener('submit', e => {
	e.preventDefault();

	let fahrenheit = inputС.value;

	let celsius = (fahrenheit - 32) * 5/9;

	statusС.innerHTML = celsius.toFixed(1) + ' °C';

	formC.reset();
})



const formF = document.querySelector('#getFForm');
const inputF = document.querySelector('#getFInput');
let statusF = document.querySelector('#getFStatus');

formF.addEventListener('submit', e => {
	e.preventDefault();

	let celsius = inputF.value;

	let fahrenheit = (celsius * 9/5) + 32;

	statusF.innerHTML = fahrenheit.toFixed(1) + ' °F';

	formF.reset();
})
