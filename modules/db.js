// require npm packages
const mysql = require('mysql')

//create mysql connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'toluwanimi',
    password: 'password',
    database: 'pacetimesheet_'
})

connection.connect((err, res) => {
    if (err) throw err
    console.log('DB connected')
})

module.exports = connection