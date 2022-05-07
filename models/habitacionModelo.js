//importar mongoose 
import mongoose from "mongoose";

//constante para crear el modelo de datos
const Schema=mongoose.Schema 

//Construyo mi modelo o es quema 
const Habitacion=new Schema({
    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required: true
    },
    descripcion:{
        type:String,
        require:true
    },
    precio: {
        type: String,
        required:true
    }
})

export const modeloHabitacion=mongoose.model('habitaciones', Habitacion)


