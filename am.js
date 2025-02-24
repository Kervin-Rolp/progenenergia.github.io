document.addEventListener("DOMContentLoaded", function () {
  const apiUrl =
    "https://script.google.com/macros/s/AKfycbybegOctHSQwyVljaOZsqOdbuoJyAk44qdPo37UapxwGMaKF6QslaQzaKhWQCh2xsZ-kw/exec";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((datos) => {
      llenarTabla(datos);
      crearLeyenda(datos);
    })
    .catch((error) => console.error("Error cargando los datos:", error));

  function llenarTabla(datos) {
    let tabla = document.querySelector("#tablaEquipos tbody");
    tabla.innerHTML = "";

    datos.forEach((dato) => {
      let fila = document.createElement("tr");

      Object.keys(dato).forEach((clave) => {
        let celda = document.createElement("td");
        celda.textContent = dato[clave];

        if (clave.toLowerCase() === "estado") {
          let color = obtenerColorEstado(dato[clave]);
          celda.style.backgroundColor = color;
          celda.style.color = "white";
        }

        fila.appendChild(celda);
      });

      tabla.appendChild(fila);
    });
  }

  function crearLeyenda(datos) {
    const conteoEstados = {};
    datos.forEach(
      (d) =>
        (conteoEstados[d["Estado"]] = (conteoEstados[d["Estado"]] || 0) + 1)
    );

    let legendDiv = document.getElementById("legend");
    legendDiv.innerHTML = "<h3>Legenda de Estados</h3>";

    Object.keys(conteoEstados).forEach((estado) => {
      let color = obtenerColorEstado(estado);
      let legendItem = document.createElement("div");
      legendItem.classList.add("legend-item");

      let colorBox = document.createElement("span");
      colorBox.classList.add("legend-color");
      colorBox.style.backgroundColor = color;

      let text = document.createElement("span");
      text.innerHTML = `<strong>${estado}:</strong> ${conteoEstados[estado]}`;

      legendItem.appendChild(colorBox);
      legendItem.appendChild(text);
      legendDiv.appendChild(legendItem);
    });
  }

  function obtenerColorEstado(estado) {
    switch (estado) {
      case "Concluído":
        return "green";
      case "Cancelado Execução":
      case "Cancelado":
        return "red";
      case "Aguardando Execução":
        return "orange";
      case "Elaboração":
        return "blue";
      case "Execução":
        return "purple"; // Cambié para que no se repita con "Elaboração"
      default:
        return "gray";
    }
  }

  // Modo oscuro/claro con accesibilidad mejorada
  document.getElementById("modoOscuro").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");
    this.setAttribute(
      "aria-label",
      isDarkMode ? "Activar modo claro" : "Activar modo oscuro"
    );
  });

  // Filtro en la tabla
  document.getElementById("buscador").addEventListener("input", function () {
    let filtro = this.value.toLowerCase();
    let filas = document.querySelectorAll("#tablaEquipos tbody tr");

    filas.forEach((fila) => {
      let textoFila = fila.textContent.toLowerCase();
      fila.style.display = textoFila.includes(filtro) ? "" : "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".sidebar-toggle");

  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  // Función para cerrar sesión (puedes personalizarla)
  window.cerrarSesion = function () {
    alert("Cerrando sesión...");
    window.location.href = "/login.html"; // Redirige a la página de login
  };
});
