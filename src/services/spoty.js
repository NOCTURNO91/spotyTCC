//CONSUMIENDO APIS


import {URI,PETICION} from '../helpers/DatospeticionGet.js'
//1.PARA DONDE VOY


//CONFIGURA LA PETICION
//3.arranca pues
//consumo del API

fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json()
})

.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks)
    let fila= document.getElementById('fila')

    
})  
 

.catch(function(error){
    console.log(error)
})