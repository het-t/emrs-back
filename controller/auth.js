import jwt from 'jsonwebtoken'

const auth = (req, res, next) => {
    jwt.verify(req.cookies._token, 'x', (err, decrypted) => {
        if (err) {
            console.log(err)
            res.send("login again")
        }
        else {
            req.userId = decrypted.userId
            next()
        }
    })
}

export default auth