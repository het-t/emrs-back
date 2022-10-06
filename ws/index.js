import {WebSocketServer} from 'ws'

var usersList = {}

const usersListGetter = () => usersList

const wss = new WebSocketServer({
    port: 8282,
})

export {
    wss,
    usersListGetter
}