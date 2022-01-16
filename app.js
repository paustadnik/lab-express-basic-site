const express = require('express')
const app = express()

app.use(express.static('public')) 

app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

app.get('/home', (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (request, response) => {
    response.sendFile(`${__dirname}/views/about.html`)
})

app.get('/works', (request, response) => {
    response.sendFile(`${__dirname}/views/works.html`)
})

app.get('/photoGallery', (request, response) => {
    response.sendFile(`${__dirname}/views/photos.html`)
})

app.listen(5002, () => {
    console.log('server started')
})

