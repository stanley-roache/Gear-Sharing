const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
    return db.getLost()
        .then(lostPets => {
            res.json({lostPets})
            res.sendStatus(200)
         })
        .catch(err => {
            res.status(500).send('DATABASE ERROR:' + err.message)
        })
})

router.post('/', (req, res) => {
    const pet = req.body

    return db.addLost(pet)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR:' + err.message)
        })
})

module.exports = router