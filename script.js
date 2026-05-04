function guardarToken(){

const token = document.getElementById("tokenInput").value

sessionStorage.setItem("spotify_token", token)

alert("Token guardado correctamente")

}


document.getElementById("trackSelect").addEventListener("change", obtenerTrack)


function obtenerTrack(){

const trackId = document.getElementById("trackSelect").value

const token = sessionStorage.getItem("spotify_token")

if(!token){

mostrarError("Primero debes guardar un token")

return

}

fetch(`https://api.spotify.com/v1/tracks/${trackId}`,{

headers:{
Authorization: `Bearer ${token}`
}

})

.then(response => {

if(!response.ok){
throw new Error("Error en la API")
}

return response.json()

})

.then(track => mostrarTrack(track))

.catch(error => {

mostrarError("Hubo un error al consultar la API de Spotify")

})

}


function mostrarTrack(track){

let artistasHTML = ""

for(let i = 0; i < track.artists.length; i++){

artistasHTML += `

<p>

<a href="${track.artists[i].external_urls.spotify}" target="_blank">

${track.artists[i].name}

</a>

</p>

`

}

const resultado = document.getElementById("resultado")

resultado.innerHTML = `

<div class="card p-3 mt-3">

<p><strong>Tipo de álbum:</strong> ${track.album.album_type}</p>

<p><strong>Total canciones:</strong> ${track.album.total_tracks}</p>

<p><strong>Nombre del álbum:</strong> ${track.album.name}</p>

<h5>Artistas</h5>

${artistasHTML}

</div>

`

}


function mostrarError(mensaje){

const resultado = document.getElementById("resultado")

resultado.innerHTML = `

<div class="alert alert-danger mt-3">

${mensaje}

</div>

`

}


function limpiarPagina(){

document.getElementById("resultado").innerHTML = ""

}