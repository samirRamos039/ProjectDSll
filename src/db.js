const {Pool} = require('pg')

const db = new Pool({
    user: 'posgres',
    passwor: '1234',
    host: 'localhost',
    port: 5432,
    database: 'prueba'
})

module.exports = db;