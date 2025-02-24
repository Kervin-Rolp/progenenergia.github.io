function obtenerUbicacion() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        mostrarMapa(lat, lon);
      },
      (error) => {
        alert("No se pudo obtener la ubicación.");
      }
    );
  } else {
    alert("Tu navegador no soporta geolocalización.");
  }
}

function mostrarMapa(lat, lon) {
  let mapaDiv = document.getElementById("mapa");
  mapaDiv.innerHTML = `<iframe width="100%" height="500" 
        src="https://www.openstreetmap.org/export/embed.html?bbox=${
          lon - 0.01
        }%2C${lat - 0.01}%2C${lon + 0.01}%2C${lat + 0.01}&layer=mapnik">
    </iframe>`;
}
