const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')
let status = document.querySelector('h1')

form.addEventListener('submit', e => {
	e.preventDefault() 

	let piWhole = `${Math.PI}`.slice(0,2)
	let piOther = `${Math.PI}`.slice(2)

	status.innerHTML = `${piWhole}${piOther.slice(0,input.value)}`

	form.reset()
})
