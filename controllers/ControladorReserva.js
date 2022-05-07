import {ServicioReserva} from '../services/ServicioReserva.js' 
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorReserva{
    constructor() { }

    async insertar(request, response) {

        let reserva = new ServicioReserva()
        let habitacion = new ServicioHabitacion()

        //Recibir los datos de pa peticion

        let datosReserva = request.body//Recibo datos
        
        let habitacionABuscar= await habitacion.buscarId(datosReserva.idHabitacion)
        
        let costohabitacion = habitacionABuscar.precio
        let day1=new Date(datosReserva.fechaIngreso)
        let day2=new Date(datosReserva.fechaSalida)
        
        var dias = (day2.getTime()-day1.getTime())/(1000 * 3600 * 24);

        let cobro=dias*costohabitacion
        datosReserva.costo=cobro

        try {
            await reserva.insertar(datosReserva)
            //Envio la respuesta
            response.status(200).json({
                mensaje: "Exito en el ingreso de la reserva",
                datosIngresados: datosReserva,
                estado: true,
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallamos en el ingreso de la reserva"+error,
                datosIngresados: [],
                estado: false
            })
        }
    }


    async buscarPorId(request, response) {

        let reserva = new ServicioReserva()
        let id = request.params.id//Id que llega por la URL

        try {
            response.status(200).json({
                mensaje: "Exito buscando reserva por ID ",
                datos: await reserva.buscarId(id),
                estado: true
            })
        } catch (error) {
            response.status(400).json({
                mensaje: "Fallamos buscando reserva por ID "+error,
                datos: [],
                estado: false
            })

        }
    }

    async editar(request, response) {

        let reserva = new ServicioReserva()
        let id = request.params.id //id que llega por la URL
        let datosReserva = request.body //RECIBE DEL BODY

        try {
            await reserva.editar(id, datosReserva)
            response.status(200).json({
                mensaje: "Exito editando la reserva por ID ",
                datos: "Datos del id actualizados: " + datosReserva,
                estado: true
            })

        } catch (error) {

            response.status(400).json({
                mensaje: "Fallamos editando la reserva por ID "+error,
                datos: [],
                estado: false
            })

        }



    }

    async eliminar(request, response) {
        let reserva = new ServicioReserva()
        let id = request.params.id //id que llega por la URL

        try {
            await reserva.eliminar(id)
            response.status(200).json({
                mensaje: "Exito eliminando la reserva por ID ",
                datos: "Datos del id: " + id,
                estado: true
            })
        } catch {
            response.status(400).json({
                mensaje: "Fallamos eliminando la reserva por ID "+error,
                datos: "Datos del id: " + id,
                estado: false

            })


        }
    }


}