import dbFunction from '../db/dbGenerator.js'

const createRecord = (req, res, next) => {
    console.log("record field ids", (req.body.recordFields))
    console.log("record field values", (req.body.recordValues))

    dbFunction(
        `records_create_record(?, ?, ?, ?)`,
        [req.userId, req.body.baseRecordId, JSON.stringify(req.body.recordFields), JSON.stringify(req.body.recordValues)]
    )
    .then(result => {
        console.log(result)
    })
}

export default createRecord