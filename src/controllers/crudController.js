const pool = require('../db')


const select = async (res,req)=>{
    const result = await pool.query('SELECT * FROM cliente')
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