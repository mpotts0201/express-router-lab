const express = require('express')
const app = express()
const hbs = require('hbs')
const mathController = require('./controllers/mathController')
const greetingController = require('./controllers/greetingController')
const reversedController = require('./controllers/reversedController')
app.set('view engine', 'hbs')


app.use(express.static(`${__dirname}/public`))
app.use('/math', mathController)
app.use('/greeting', greetingController)
app.use('/reversed', reversedController)

app.get('/',(req,res)=> {


})




app.listen(3000, () => {
    console.log("Listening to port 3000")
})

