import {obtenerToken} from "../services/serviciosGenerarToken.js"

// 1. Para donde voy

// Llamar al servicio de token
let tokenRAMDOM=await obtenerToken()

let token=tokenRAMDOM.token_type+" "+tokenRAMDOM.access_token

//es un conjunto de herramientas que facilitan 

// 2. Configurar la petición

export const PETICION={
    method: "GET",
    headers: {
        Authorization: token
    }
}
