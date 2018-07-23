const router = require('express').Router()
const verifyJWT = require('express-jwt')
const { getSecret, handleError } = require('../auth/token')
const gearDB = require('../db/gear')
const userDB = require('../db/users')

const {sendRequest} = require('../mail/sendGrid')

router.use(
    verifyJWT({
        secret: getSecret
    }),
    handleError
)

router.post('/request', (req, res) => {
    Promise.all([
        gearDB.getGearByGearId(req.body.gearId),
        userDB.getUserById(req.body.ownerId),
        userDB.getUserById(req.user.user_id)
    ])
    .then(([item, owner, requester]) => {
        return sendRequest(item, owner, requester)
    })
    .then(() => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.status(500).send({
            message: 'error sending mail request',
            err
        })
    })
})

module.exports = router