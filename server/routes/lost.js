const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
    return db.getLost()
        .then(lostPets => {
            res.status(200).json(lostPets)
         })
        .catch(err => {
            res.status(500).send('DATABASE ERROR:' + err.message)
        })
})

router.post('/', (req, res) => {
    const pet = req.body
    console.log(pet)
    
    return db.addLost(pet)
        .then(id => {
            res.status(200).json(id)
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR:' + err.message)
        })
})

module.exports = router