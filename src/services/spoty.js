import {URI,PETICION} from '../helpers/datosPeticionGet.js'
import {consultarCanciones} from './servicioConsultarCanciones.js'
import {pintarCanciones} from '../controllers/controladorPintarCanciones.js'

// CONSUMIR UN API (CONSUMIR UN SERVICIO)

let canciones=await consultarCanciones(URI,PETICION)
console.log(canciones)

// Renderizo los DATOS (pintar)

 pintarCanciones(canciones.tracks)