const router = require('express').Router();
const travelerRouter = require('./travelers')
const helperRouter = require('./helpers')
router.use('/travelers', travelerRouter);
router.use('/helpers', helperRouter)
router.get('/', async (req, res, next) => {
    try {
        res.json({ "message" : 'Hello from the api'})
    } catch(err) {
        next(err)
    }
})

router.post('/profile/picture/upload', async (req, res, next) => {
    try {
        if (req.files === null) {
            return res.status(400).json({ msg: 'No file uploaded' })
        }
        
        const file = req.files.file

        file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
            if(err) {
                console.error(err);
                return res.status(500).send(err);
            }

            res.json({ fileName: file.name, filePath: `/uploads/${fileName}`})
        })


    } catch(err) {
        next(err)
    }
})

module.exports = router 