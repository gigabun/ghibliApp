// create request variable and assgin XMLHttpRequest object 
var request = new XMLHttpRequest()


// open a new connection using GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)


request.onload = function() {
	// variable containing the JSON data, also JSON.parse will parse the data 
	var data = JSON.parse(this.response)

	if (request.status >= 200 && request.status < 400) {
		data.forEach(movie => {
			// log each movie title
			console.log(movie.title)
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