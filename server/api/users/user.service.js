const pool = require('../../config/database')



module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registrations(firstname, secondname, lastname, password) values(?,?,?,?)`,
            [
                data.firstname,
                data.secondname,
                data.lastname,
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