import {URI,PETICION} from '../helpers/DatospeticionGet.js'
import {consultarCanciones} from './servicioConsultarCanciones.js'
import {pintarCanciones} from '../controllers/controladorPintarCaciones.js'

//CONSUMIR UN API (CONSUMIR UN SERVICIO)
let canciones=await consultarCanciones(URI,PETICION)
console.log(canciones)

//Renderizo los DATOS
pintarCanciones(canciones.tracks)
