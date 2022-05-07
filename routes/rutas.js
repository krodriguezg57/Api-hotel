import express from 'express'
//importo el controlador habitacion
import  {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'
export let rutas = express.Router()

//Defino las rutas
//Rutas servicios habitaciones: 

let controladorHabitacion = new ControladorHabitacion()

rutas.post('/api/v1/habitaciones/', controladorHabitacion.insertar)
rutas.get('/api/v1/habitaciones/', controladorHabitacion.buscarTodos)
rutas.get('/api/v1/habitaciones/:id/',controladorHabitacion.buscarId)
rutas.delete('/api/v1/habitaciones/:id/',controladorHabitacion.eliminar)
rutas.put('/api/v1/habitaciones/:id/', controladorHabitacion.editar)

let controladorReserva = new ControladorReserva()

rutas.post('/api/v1/reservas/',controladorReserva.insertar)
rutas.get('/api/v1/reservas/:id/',controladorReserva.buscarPorId)
rutas.delete('/api/v1/reservas/:id/',controladorReserva.eliminar)
rutas.put('/api/v1/reservas/:id/', controladorReserva.editar)
