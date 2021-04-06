const form = document.querySelector('form');
const input = document.querySelector('input');
const status = document.querySelector('p');

form.addEventListener('submit', e => {
	e.preventDefault();

	const flippings = input.value
	let str = ''
	let heads = 0
	let tails = 0

	for (let i = 0; i < flippings; i++) {
		let flip = Math.floor(Math.random() * 2)
		if (flip) {
			str += ' H '
			heads++
		} else {
			str += ' T '
			tails++
		}
	}

	status.innerHTML = `
		<p>${str}</p>
		<h3>${heads} Heads and ${tails} Tales</h3>
	`
	
	form.reset();
})
