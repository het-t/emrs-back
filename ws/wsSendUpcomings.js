const sendUpcoming = (userList, userId, data) => {
    userList[`${userId}`].send(`received upcoming + ${data}`)
}

export default sendUpcoming