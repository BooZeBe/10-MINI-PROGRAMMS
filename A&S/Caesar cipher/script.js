const eForm = document.querySelector('#eform');
const eInput = document.querySelector('#einput');
const eStatus = document.querySelector('#estatus');
const eKey = document.querySelector('#ekey');

eForm.addEventListener('submit', e => {
	e.preventDefault();

	let arr = eInput.value.split('')

	arr = arr.map(e => {
		if (e.charCodeAt() !== 32) {
			return String.fromCharCode(e.charCodeAt() + Number(eKey.value))
		} else {
			return ' '
		}
	})

	eStatus.innerHTML = arr.join('')

	eForm.reset();
})

const dForm = document.querySelector('#dform');
const dInput = document.querySelector('#dinput');
const dStatus = document.querySelector('#dstatus');
const dKey = document.querySelector('#dkey');

dForm.addEventListener('submit', e => {
	e.preventDefault();

	let arr = dInput.value.split('')

	arr = arr.map(e => {
		if (e.charCodeAt() !== 32) {
			return String.fromCharCode(e.charCodeAt() - Number(dKey.value))
		} else {
			return ' '
		}
	})

	dStatus.innerHTML = arr.join('')


	dForm.reset();
})