const {Router} = require ('express')
const pool = require('../db')


const select = async (req,res)=>{
    
   res.send('lista de tareas');
}

const insert = async (req,res)=>{
    res.send ('insertar datos');
}

const deleted = async (req,res)=>{
    res.send ('borrar datos');
}

const update = async (req,res)=>{
    res.send ('actualizar datos');
}


module.exports = {

    select,
    insert,
    deleted,
    update
}