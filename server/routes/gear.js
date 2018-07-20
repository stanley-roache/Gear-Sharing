const router = require('express').Router()
const {getGear} = require('../db/gear')

router.get('/', (req, res) => {
    getGear(req.params.username)
        .then((gear) => {
            res.status(200).json(gear)
        })
        .catch(err => {
            console.log('in catch block')
            res.status(500).send({ message: 'error getting gear' })
        })
        // TODO: error catching not working
})

module.exports = router