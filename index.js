import express from 'express'
import cookieParser from 'cookie-parser'
import router from './router/index.js'
import {wss, usersListGetter} from './ws/index.js'
import init from './ws/wsInit.js'
import sendUpcoming from './ws/wsSendUpcomings.js'

const app = express()

app.use(cookieParser('x'))
app.use(express.urlencoded({extended: true}))
app.use(express.json({limit:'5mb'}))


app.use('/api', router)


wss.on('connection', (ws) => {
    console.log("connection")
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)

        const sender = msg.userId
        const event = msg.event
        const data = msg.data

        switch (event) {
            
            case 'init': {
                init(usersListGetter(), sender, ws)
                break
            }
            case 'new_record': {
                sendUpcoming(usersListGetter(), sender, data)
                break
            }
        }
        
    })
})


app.listen(8181, ()=>{
    console.log("PORT 8181")
})