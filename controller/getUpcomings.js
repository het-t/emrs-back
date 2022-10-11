import dbFunction from "../db/dbGenerator.js"

const getUpcomings = (req, res) => {
    dbFunction(
        `records_user_upcomings(?)`, 
        [req.userId]
    )
    .then((upcomings) => {
        res.send(upcomings)
    })
}

export default getUpcomings