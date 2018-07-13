const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  return db.getFound()
    .then(foundPets => {
      res.status(200).json(foundPets)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR:' + err.message)
    })
})

router.post('/', (req, res) => {
  const pet = req.body
  return db.addFound()
  .then(foundPet => {
    res.status(200).json(foundPet)
  })
  .catch(err => {
    res.status(500).send('DATABASE ERROR:' + err.message)
  })

})
module.exports = router