const init = (usersList, userId, ws) => {
    usersList[`${userId}`] = ws
    console.log(usersList)
}

export default init