const express = require('express')

const app = express() // server instance create karna

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/about', (req, res) => {
  res.send('This is a about page')
})

app.get('/home', (req, res) => {
  res.send('This is a Home page')
})

app.listen(3000) //server ko start karna
