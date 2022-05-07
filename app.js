//require('dotenv').config()
import 'dotenv/config'

import {Servidor} from './Server/Servidor.js'

//creo un objeto de la clase 
let servidor=new Servidor()

//llamo a encender servidor
servidor.encenderServidor()
