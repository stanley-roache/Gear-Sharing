const verifyJWT = require('express-jwt')
const {getSecret, handleError} = require('../auth/token')
const router = require('express').Router()

// no frontend setup to test back-end secret routes

router.get('/public', (req, res) => {
    console.log('public')
    res.send('public')
})

router.use(verifyJWT({
        secret: getSecret
    }), handleError
)

// all routes below here protected

router.get('/secret', (req, res) => {
    console.log('secret')
    res.send('secret')
})

module.exports = router