import dbFunction from '../db/dbGenerator.js'

const createRecordField = (req, res, next) => {
    dbFunction(
        'fields_main_create_field(?, ?, ?)', 
        [req.userId, req.query.name, req.query.type]
    )
    .then(result => {
        res.send(true)
    })
    .catch(err => {
        console.log(err)
        res.send(false)
    })
}

export default createRecordField