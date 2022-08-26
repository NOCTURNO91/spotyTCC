//CONSUMIENDO APIS

//1.PARA DONDE VOY
const URI="https://api.spotify.com/v1/artists/711MCceyCBcFnzjGY4Q7Un/top-tracks?market=US"

//CONFIGURA LA PETICION

const PETICION={
    method: "GET",
    headers: {
        Authorization: "Bearer BQCvPGfbdPtrx1D7wuGLHSJMMbybz_5gxT7rDUF9AGTbmqqcjmFs9f6LWvGpWKASirT1L5p2_c1s0vF9HrgmUVHI4KZDMEBnGuwmLY8gqyoyhjuatsk0vAAiISkY589XBryoBHkRw0wwRSYu51ZFs3PAhtnHxApPl7HQZSMMFLPqFWO0XMz5PSv-E_s3bSFzijY"

    }
}

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

    respuesta.tracks.forEach(function(cancion){
        
        let columna = document.createElement('div')
        columna.classList.add('col')

        let tarjeta = document.createElement('div')
        tarjeta.classList.add('card','shadow','p-3','h-100')

        let audio = document.createElement('audio')
        audio.src= cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute('controls','controls')

        let nombre=document.createElement("h3")
        nombre.classList.add("text-center")
        nombre.textContent= cancion.name

        let imagen=document.createElement("img")
        imagen.classList.add("w-100")
        imagen.src=cancion.album.images[0].url

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})  
 

.catch(function(error){
    console.log(error)
})