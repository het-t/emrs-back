import dbFunction from '../db/dbGenerator.js'

const getRecordHistory = (req, res, next) => {
    dbFunction(
        'records_record_with_baserecords(?)', 
        [req.query.recordId]
    )
    .then(history => {
        res.send(history)
    })
    .catch(err => {
        console.log(err)
        res.send(false)
    }) 
}

export default getRecordHistory