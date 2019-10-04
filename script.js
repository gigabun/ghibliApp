// create request variable and assgin XMLHttpRequest object 
var request = new XMLHttpRequest()


// open a new connection using GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)


request.onload = function() {
	// variable containing the JSON data, also JSON.parse will parse the data 
	var data = JSON.parse(this.response)

	if (request.status >= 200 && request.status < 400) {
		data.forEach(movie => {
			// create a div with a card class
			const card = document.createElement('div')
			card.setAttribute('class', 'card')

			// Create an h1 and set the text content to the film's title
			const h1 = document.createElement('h1')
			h1.textContent = movie.title 

			// create a p and set the text content to the films description 
			const p = document.createElement('p')
			movie.description = movie.description.substring(0, 300)
			p.textContent = `${movie.description}...`

			// append the card to the container element 
			container.appendChild(card)

			card.appendChild(h1)
			card.appendChild(p)

		}) 
	} else {
		console.log('error')
		}

}

// send request 
request.send()

const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)