const router = require('express').Router()
const verifyJWT = require('express-jwt')
const { getSecret, handleError } = require('../auth/token')
const { getUserByName } = require('../db/users')
const { getGearByUserId } = require('../db/gear')

// initial user info fetching route, to be removed

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
    .catch(err => res.status(500).send({ message: 'error getting user info' }))
})

router.use(
  verifyJWT({
    secret: getSecret
  }),
  handleError
)

// routes below here protected

router.get('fullProfile', (req, res) => {
  let user = {}

  Promise.all([
    getUserByName(req.user.username),
    getGearByUserId(req.user.id)
  ])
  .then(([info, gear]) => {
    user = info
    user.gear = gear
    res.json(user)
  })
  .catch(err => {
    res.status(500)
    .send({ 
      message: 'error getting user info',
      err 
    })
  })
})


module.exports = router