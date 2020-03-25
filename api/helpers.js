const router = require('express').Router();
const {db, TravelerUser, HelperUser, Sequelize} = require('./models/index')


router.post('/', async (req, res, next) => {
    try {
        const newUser = await HelperUser.create(req.body)
        
        res.status(200).send(newUser) 
    } catch(err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const users = await HelperUser.findAll()

        res.status(200).json(users)
    } catch(err) {
        next(err)
    }
})
module.exports = router