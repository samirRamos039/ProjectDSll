const {pool} = require('pg')

const pool = new pool({
    user: 'posgres',
    passwor: '1234',
    host: 'localhost',
    port: 5432,
    database: 'ecommerce'
})

module.exports = pool;