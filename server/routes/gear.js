const router = require('express').Router()
const verifyJWT = require('express-jwt')
const { getSecret, handleError } = require('../auth/token')
const { getUserByName } = require('../db/users')
gearDB = require('../db/gear')

// public routes

router.get('/single/:id', (req, res) => {
  const gearID = req.params.id

  gearDB.getGearByGearId(gearID)
    .then(gear => {
      res.json(gear)
    })
    .catch(err => {
      res.status(500).send({
        message: 'error grabbing single item',
        err
      })
    })
})

router.get('/all', (req, res) => {
  gearDB.getGear()
    .then(gearList => {
      res.json(gearList)
    })
    .catch(err => {
      res.status(500).send({
        message: 'error grabbing full gear list',
        err
      })
    })
})

router.use(
  verifyJWT({
    secret: getSecret
  }),
  handleError
)

router.post('/new', (req, res) => {
  const newItem = req.body

  gearDB.addGear(newItem)
    .then(ids => {
      res.json({
        gear: newItem,
        id: ids[0]
      })
    })
    .catch(err => {
      res.status(500).send({
        message: 'error adding gear item',
        err
      })
    })
})

module.exports = router