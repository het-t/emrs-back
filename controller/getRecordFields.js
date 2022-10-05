import dbFunction from '../db/dbGenerator.js'

const getRecordFields = (req, res, next) => {
    dbFunction('fields_main_get_fields(?)', req.userId)
    .then(fields => {
        res.send(fields)
    })
    .catch(err => {
        console.log(err)
        res.send(false)
    }) 
}

export default getRecordFields