const router = require('express').Router()
const {getUserByName} = require('../db/users')

// to protect

router.get('/:username', (req, res) => {
    getUserByName(req.params.username)
        .then((user) => {
            res.status(200).json(user)
        })
        .catch(err => res.status(500).send({message: 'error getting user info'}))
})


module.exports = router