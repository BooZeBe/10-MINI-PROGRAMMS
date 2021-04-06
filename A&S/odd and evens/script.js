const form = document.querySelector('form');
const input = document.querySelector('input');
const status = document.querySelector('h2');

form.addEventListener('submit', e => {
	e.preventDefault();

	let arrOfNumbers = input.value.split(' ').map(num => Number(num))
	console.log(arrOfNumbers)
	let arrOdd = []
	let arrEven = []

	arrOfNumbers.forEach(num => num % 2 === 0 ? arrEven.push(num) : arrOdd.push(num))

	if (arrOfNumbers.includes(NaN) || input.value === '') {
		status.innerHTML = `Type only numbers idiot!`
	} else {
		status.innerHTML = `
			<h3>Odds: ${arrOdd.join(' ')}</h3>
			<h3>Evens: ${arrEven.join(' ')}</h3>
			<h2>${arrOdd.length} Odds, ${arrEven.length} Evens</h2>
		`
	}
	

	form.reset();
})
