import { obtenerToken } from "../services/serviciosGenerarToken.js"

// 1.PARA DONDE VOY

//LLAMAR AL SERVICIO DE TOKEN
let tokenRAMDOM=await obtenerToken()

let token=tokenRAMDOM.token_type+""+tokenRAMDOM.access_token

//ES UN CONJUNTO DE HERRAMIENTAS QUE FACILITAN

// 2.configurar la peticion

export const PETICION={
    method: "GET",
    headers: {
        Authorization:token

    }
}

