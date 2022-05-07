//importamos el servicio
import {ServicioHabitacion} from '../services/ServicioHabitacion.js' 

/**El controlador tiene la logica del negocio */
export class ControladorHabitacion{
    constructor(){
    }
    
    async insertar(request, response){
        let servicio=new ServicioHabitacion()
        //recibir los datos de la peticion
        let datosPeticion=request.body
        
        try{
            await servicio.insertar(datosPeticion)//espero a que el servicio guarde los datos
            //Envio la respuesta
            response.status(200).json({
                mensaje:"exito en el ingreso de datos", 
                datosIngresados: datosPeticion,
                estado: true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"error "+error+": en el ingreso de datos", 
                datosIngresados: [],
                estado: true
            })
        }  
    }

    async buscarTodos(request,response){ //Instancio la clase servicio //PARA PODERLA UTILIZAR 
        let servicio=new ServicioHabitacion() 
        try{ 
                response.status(200).json({ 
                    mensaje:"exito buscando la información", 
                    datos: await servicio.buscarTodos(), 
                    estado:true }) 
            }catch(error){
                response.status(400).json({ 
                    mensaje:"error "+error+": buscando la información", 
                    datos: [], 
                    estado:false }) 
            } 
        }

    async buscarId(request, response){
        let servicio=new ServicioHabitacion() 
        let id=request.params.id


        try{
            response.status(200).json({
                mensaje:"exito al buscar por id", 
                datosBuscados: await servicio.buscarId(id),
                estado: true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallo "+error+": al buscar por id", 
                datosBuscados: [],
                estado: false
            })
        }
       
    }

    async editar(request, response){
        let servicio=new ServicioHabitacion() 
        let id=request.params.id
        let datosEditar=request.body
        try{
            await servicio.editar(id,datosEditar)
            response.status(200).json({
                mensaje:"exito al editar por id", 
                datosEditados: "Datos del id "+id+ 
                " que seran editados son: "+datosEditar,
                estado: true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"error: "+error+": al editar por id", 
                datosEditados: [],
                estado: false
            })
        }
    }

    buscarCostoPorId(){
        
    }

    async eliminar(request, response){
        let servicio=new ServicioHabitacion() 
        let id=request.params.id
        try{
            await servicio.eliminar(id)

            response.status(200).json({
                mensaje:"exito al eliminar por id", 
                datosBuscados: "Datos del id "+id,
                estado: true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"error: "+error+": al eliminar por id", 
                datosBuscados: "Datos del id "+id,
                estado: true
            })
        }
    }

}