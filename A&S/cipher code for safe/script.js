const form = document.querySelector('form');
const input = document.querySelector('input');
const status = document.querySelector('h2');
const select = document.querySelector('select');

form.addEventListener('submit', e => {
	e.preventDefault();

	let alph = "abcdefghijklmnopqrstuvwxyz";
	let cipher = []

	for (let i = 0; i < input.value; i++) {
		if (select.value === 'numbers' || select.value === 'symbols') {
			cipher.push(Math.round(Math.random() * 10))
		} else {
			let upper = Math.round(Math.random() * 1)
			if (upper === 0) {
				cipher.push(alph[Math.round(Math.random() * 26)])
			} else {
				cipher.push(alph[Math.round(Math.random() * 26)].toUpperCase())
			}
		}
	}

	status.innerHTML = cipher.join('')

	form.reset();
})
