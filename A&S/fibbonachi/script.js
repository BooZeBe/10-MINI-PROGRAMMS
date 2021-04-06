const form = document.querySelector('form');
const input = document.querySelector('input');
let status = document.querySelector('p');

form.addEventListener('submit', e => {
	e.preventDefault();

	let num = input.value
	let F = [0,1]	

	let i = 0	
	let j = 0
	while (i < num) {
		i = F[j] + F[j + 1]
		j++

		if (num > i) { F.push(i) }
	}

	if (num > 1) { 
		status.innerHTML = F.join(' ') 
	} else {
		status.innerHTML = 0
	}
	
	form.reset();
})
