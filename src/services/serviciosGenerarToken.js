//GENERAR UN TOKEN AUTOMATICO

//URI
const URI="https://accounts.spotify.com/api/token"

//DATOS DE ENVIO

const DATA1 = "grant_type=client_credentials"
const DATA2 = "client_id=9f03b8ad8ccb4cdfbf53e283529032b0"
const DATA3 = "client_secret=3b5ae4e14d51421081d293d50cba26c4"

//PARAMETROS PETICION

const PETICION = {
    method: "POST",
    Headers: {"Content-Type":"application/x-www-form-urlencoded"},
    body: DATO1+"&"+DATO2+"&"+DATO3

}

//FETCH
//PROMESA
//fetch(URI,PETICION)
// .then(function(respuesta){
//     return respuesta.json
// })
// .then(function(respuesta){
//     console.log(respuesta)
// })
// .catch(function(respuesta){
//     console.log(respuesta)
// })

//ASYNC AWAIT
export async function obtenerToken(){
    let respuesta=await fetch(URI,PETICION)
    return await respuesta.json()
}
console.log(await obtenerToken())