//importo el modelo habitacion
import {modeloHabitacion} from "../models/habitacionModelo.js"

export class ServicioHabitacion{

    constructor(){}

    async buscarTodos(){
        let habitaciones= await modeloHabitacion.find()
        return habitaciones
    }

    async buscarId(id){
        let habitacion= await modeloHabitacion.findById(id)
        return habitacion
    }

    async insertar(habitacion){
        let habitacionNueva = new modeloHabitacion(habitacion) 
        return await habitacionNueva.save()
    }

    async editar(id, habitacion){
        return await modeloHabitacion.findByIdAndUpdate(id, habitacion)
    }

    async eliminar(id){
        return await modeloHabitacion.findByIdAndDelete(id)
    }

}