const pool = require('../../config/database')



module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registrations(firstname, secondname, lastname, password) values(?,?,?,?)`,
            [
                data.first_name,
                data.second_name,
                data.last_name,
                data.password
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        )
    }
}