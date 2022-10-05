import con from './connection.js'

const dbFunction = (sp, args) => {
    return new Promise((resolve, reject) => {
        con.query(`CALL ${sp}`, 
            args,
            (err, results) => {
                if (err) {
                    reject(err)
                } 
                else {
                    resolve(results)
                }
            }
        )
    })
}

export default dbFunction