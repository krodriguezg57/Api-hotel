//Importo el paquete express
//const express = require('express')
import express from 'express'
import {rutas} from '../routes/rutas.js'
import {conectar} from '../database/conexion.js'
import cors from cors

export class Servidor{

    constructor(){
        this.app = express()
        this.conectarBD()
        this.llamarAuxiliares()
        this.atenderServicios()
    }

    encenderServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`:...::Servidor encendido ${process.env.PORT}::..:`)
        })
    }

    atenderServicios(){
        this.app.use('/',rutas)
    }

    conectarBD(){
        conectar()
    }

    llamarAuxiliares(){
        //activo la recepcion de datos por el body de la peticion
       this.app.use(express.json())
       this.app.use(cors())
    }
}

