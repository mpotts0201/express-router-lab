const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    let string = req.query.name
    res.render('greeting', {
        result: "Hello, " + string
    })

})





module.exports = router