//GENERAR UN TOKEN AUTOMATICO

//USI
const URI="https://accounts.spotify.com/api/token"

//DATOS DE ENVIO

const DATA1 = ""
const DATA2 = ""
const DATA3 = ""

//PARAMETROS PETICION

const PETICION = {
    method: "POST",
    Headers: "",
    body: DATO1+"&"+DATO2+"&"+DATO3

}

//FETCH
//PROMESA
fetch(URI,PETICION)
.then(function(respuesta){
    return respuesta.json
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})

//ASYNC AWAIT
function obtenerToken(){
    let respuesta=await fetch(URI,PETICION)
    return await respuesta.json()
}
console.log(await obtenerToken())