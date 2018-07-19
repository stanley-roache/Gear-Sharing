const verifyJWT = require('express-jwt')
const {getSecret, handleError} = require('../auth/token')
const router = require('express').Router()
const dbgear = require('../db/gear')

// no frontend setup to test back-end secret routes

router.get('/public', (req, res) => {
    console.log('public')
    res.send('public')
})

router.use(
    (req, res, next) => {
        console.log('middleware');
        next()
    },
    verifyJWT({
        secret: getSecret
    }), 
    (req, res, next) => {
        console.log('verified/failed');
        next()
    }, handleError
)

// all routes below here protected

router.get('/secret', (req, res) => {
    console.log('secret')
    res.send('secret')
})

router.get('/gear'), (req, res) => {
    console.log('hitting gear route');
    dbgear.getGearByUserId(req.user.id)
        .then(gearList => {
            res.send(gearList)
        })
        .catch(err => {
            res.send('There was an err')
        })
}

module.exports = router