export function pintarCanciones(canciones){
    let fila = document.getElementById("fila")
    canciones.forEach(function(cancion){
        
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

        
        let popularidad=document.createElement("h3")
        popularidad.classList.add("text-center")
        popularidad.textContent= cancion.name


        tarjeta.appendChild(nombre)
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        tarjeta.appendChild(popularidad)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
}