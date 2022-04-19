const express = require('express')
const port = 3000
const app = express()

app.post('/login', (req, res) => {
  res.status(200).json({ access_token: 'dw0ady9aydh79aw8dg7a8wgdaw' })
})

app.post('/gsignin', (req, res) => {
  let token = 'dw0ady9aydh79aw8dg7a8wgdaw'
  res.status(200).json({ access_token: token })
})

app.get('/products', (req, res) => {
  let product = [
    {
      id: 1,
      name: 'Shoes'
    },
    {
      id: 2,
      name: 'Shirt'
    }
  ]
  res.status(200).json(product)
})

app.put('/products/:id', (req, res) => {
  let product = {
    id: 1,
    name: 'Shoes'
  }
  res.status(200).json(product)
})
