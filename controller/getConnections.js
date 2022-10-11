import dbFunction from '../db/dbGenerator.js'

const createRecord = (req, res, next) => {
    dbFunction(
        `connections_main_get_connections(?)`,
        [req.userId]
    )
    .then(connections => {
        res.send(connections[0])
    })
}

export default createRecord