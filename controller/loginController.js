import dbFunction from '../db/dbGenerator.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const loginController = (req, res, next) => {
    dbFunction('users_login(?)', req.body.email)
    .then((results) => {
        bcrypt.compare(req.body.password, results[0][0].password)
        .then(match => {
            let payload = {
                "email": req.body.email,
                "userId": results[0][0].user_id,
            }
            jwt.sign(payload, 'x', (err, token) => {
                if (err) res.send(false)
                else {
                    if (match) {
                        res.send(token)
                    }
                    else res.send(false)
                }
            })
        })
    })
    .catch((err) => {
        console.log(err)
        res.send(false)
    })
}

export default loginController