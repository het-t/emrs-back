import express from 'express'
import cookieParser from 'cookie-parser'
import router from './router/index.js'

const app = express()

app.use(cookieParser('secret'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'5mb'}))


app.use('/api', router)

app.listen(8181, ()=>{
    console.log("PORT 8181")
})