const router = require('express').Router()
const verifyJWT = require('express-jwt')
const {getSecret, handleError} = require('../auth/token')
const {getUserByName} = require('../db/users')
const {getGearByUserId} = require('../db/gear')

// router.use(
//     (req, res, next) => {
//         console.log('middleware');
//         next()
//     },
//     verifyJWT({
//         secret: getSecret
//     }), 
//     (req, res, next) => {
//         console.log('verified/failed');
//         next()
//     }, handleError
// )

// routes below here protected

router.get('/:username', (req, res) => {
    let user = {}
    getUserByName(req.params.username)
        .then((userInfo) => {
            user = userInfo
            getGearByUserId(userInfo.id)
                .then((gearArray) => {
                    user.gear = gearArray
                    res.status(200).json(user)
                })
        })
        .catch(err => res.status(500).send({message: 'error getting user info'}))
})


module.exports = router