//importo el modelo habitacion
import {modeloReserva} from "../models/reservaModelo.js"

export class ServicioReserva{

    constructor(){}

    async buscarId(id){
        let reserva= await modeloReserva.findById(id)
        return reserva
    }

    async insertar(reserva){
        let reservaNueva = new modeloReserva(reserva) 
        return await reservaNueva.save()
    }

    async editar(id, reserva){
        return await modeloReserva.findByIdAndUpdate(id, reserva)
    }

    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }

}