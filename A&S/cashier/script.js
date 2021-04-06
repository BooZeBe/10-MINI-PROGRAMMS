const form = document.querySelector('form');
const status = document.querySelector('#status');
const price = document.querySelector('#price');
const btns = document.querySelector('#btns')

form.addEventListener('submit', e => {
	e.preventDefault();

	let products = document.querySelectorAll('.product')
	let resultPrice = 0

	products.forEach(e => {
		let productName = e.querySelector('.productName').textContent
		let productNumber = e.querySelector('.productNumber').textContent

		DATA_PRODUCTS.forEach(i => {
			if (i.name === productName) {
				resultPrice += productNumber * i.price
			}
		})
	})

	status.innerHTML = ''
	price.innerHTML = `${resultPrice} som`
})

const DATA_PRODUCTS = [
	{
		name: 'Сucumber',
		price: 5
	},
	{
		name: 'Apple',
		price: 8
	},
	{
		name: 'Pear',
		price: 10
	}
]

DATA_PRODUCTS.forEach(e => {
	btns.innerHTML += `
		<button type="button" onclick="addProduct(\`${e.name}\`)">
			${e.name} (${e.price} som)
		</button>
	`
})

function addProduct(product) {
	if (!status.innerHTML.includes(product)) {
		status.innerHTML += `
			<p id="${product}" class="product"> 
				<span class="productNumber">1</span> <span class="productName">${product}</span>
			</p>
		`
	} else {
		let price = status.querySelector(`#${product}`).querySelector('.productNumber')
		price.innerHTML++
	}
}
