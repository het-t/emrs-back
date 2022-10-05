import dbFunction from '../db/dbGenerator.js'
import bcrypt from 'bcrypt'

const loginController = (req, res, next) => {
    dbFunction('users_login(?)', req.body.email)
    .then((results) => {
        bcrypt.compare(req.body.password, results[0][0].password)
        .then(match => {
            if (match) {
                res.send(true)
            }
            else res.send(false)
        })
    })
    .catch((err) => {
        console.log(err)
        res.send(false)
    })
}

export default loginController