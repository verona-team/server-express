const router = require('express').Router()

router.post('/register', (req, res) => {
  res.status(201).json({ id: 1, name: 'Diaz' })
})