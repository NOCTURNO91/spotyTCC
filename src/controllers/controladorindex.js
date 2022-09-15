import {generarURI} from '../helpers/generarURI.js'
import {PETICION} from '../helpers/DatospeticionGet.js'
import {consultarCanciones} from '../services/servicioConsultarCanciones.js'
import {pintarCanciones} from './controladorPintarCaciones.js'

let botonArtista=document.getElementById("botonBuscar")
botonArtista.addEventListener("click",function(evento){

    let artists=document.getElementById("artista")

    const URI=generarURI(artista.value)

    async function activarServicio(){
        let canciones=await consultarCanciones(URI.PETICION)
        console.log(canciones)
        
    }

    activarServicio()
    
})