const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{

    console.log('I got dis')

} )


router.get('/:operator', (req, res) => {
    let num1 = req.query.num1
    let num2 = req.query.num2
    if (req.params.operator === 'add') {
        let result = parseInt(num1) + parseInt(num2)
        res.render('math', {result})
     }
    else if (req.params.operator === 'subtract') {
        let result = parseInt(num1) - parseInt(num2)
         res.render('math', {result})  
      }
    else if (req.params.operator === 'multiply') {
        let result = parseInt(num1) * parseInt(num2)
        res.render('math', {result})
    }
    else if (req.params.operator === 'divide') {
        let result = parseInt(num1) / parseInt(num2)
        res.render('math', {result})  
      }
})








module.exports = router