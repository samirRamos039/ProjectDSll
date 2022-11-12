const {Router} = require ('express')
const pool = require('../db')


const select = async (res,req)=>{
    
    const result = await pool.query('SELECT NOW()')
    console.log (result)
    res.json('executed')
}

const insert = async (res,req)=>{
    res.send ('insertar datos');
}

const eliminar = async (res,req)=>{
    res.send ('borrar datos');
}

const update = async (res,req)=>{
    res.send ('actualizar datos');
}


module.exports = {

    select,
    insert,
    eliminar,
    update
}