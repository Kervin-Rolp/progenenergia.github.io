document.addEventListener("DOMContentLoaded", function () {
  // URL del Google Apps Script que devuelve tus datos en formato JSON
  const apiUrl =
    "https://script.google.com/macros/s/AKfycbw8lWePMzZQNsBbsoqvtgwxEtLtu327IqLsGMW5652Ne_I0WJVyN7HvPwAhn-tdrFwHpA/exec";

  let allData = []; // Aquí almacenaremos todos los datos
  const loader = document.getElementById("loader");
  const tablaBody = document.querySelector("#tablaEquipos tbody");
  const legendDiv = document.getElementById("legend");
  const buscador = document.getElementById("buscador");

  // 1) FUNCIÓN PArA OBTENER DATOS
  function obtenerDatos() {
    loader.style.display = "block";
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((datos) => {
        allData = datos; // Guardamos todos los datos
        llenarTabla(allData);
        crearLeyenda(allData);
        loader.style.display = "none";
      })
      .catch((error) => {
        console.error("Error cargando los datos:", error);
        loader.textContent = "Error al cargar los datos.";
      });
  }

  // 2) LLAMAMOS A OBTENER DATOS (INICIAL)
  obtenerDatos();

  // 3) FUNCIÓN PARA LLENAR LA TABLA
  function llenarTabla(datos) {
    tablaBody.innerHTML = "";
    datos.forEach((dato) => {
      const fila = document.createElement("tr");

      // Ajusta los nombres de las propiedades según tu JSON real:
      // Por ejemplo, "DataExecucao", "NumeroNota", etc.
      // Se muestra un ejemplo genérico:
      const dataExecucao = dato["DATA EXECUÇÃO"] || dato["DataExecucao"] || "";
      const numeroNota = dato["Nº DA NOTA"] || dato["NumeroNota"] || "";
      const estado = dato["CIDADE"] || "cidade";
      const numeroDocumento =
        dato["Nº Documento"] || dato["NumeroDocumento"] || "";
      const estado = dato["Estado"] || "";
      const equipes = dato["Equipes"] || "";
      const horario = dato["HORARIO INICIO"] || dato["Horario"] || "";
      const horario2 = dato["HORARIO FINAL"] || dato["Horario"] || "";

      // Crear celdas en el orden que aparece en el <thead>
      crearCelda(fila, dataExecucao);
      crearCelda(fila, numeroNota);
      crearCelda(fila, cidade);
      crearCelda(fila, numeroDocumento);

      // Estado con color de fondo
      const tdEstado = document.createElement("td");
      tdEstado.textContent = estado;
      // Aplicar clases de color si corresponde
      const colorClase = obtenerClaseEstado(estado);
      tdEstado.classList.add("estado", colorClase);
      fila.appendChild(tdEstado);

      crearCelda(fila, equipes);
      crearCelda(fila, horario);
      crearCelda(fila, horario2);

      tablaBody.appendChild(fila);
    });
  }

  // Función auxiliar para crear celdas
  function crearCelda(fila, texto) {
    const celda = document.createElement("td");
    celda.textContent = texto;
    fila.appendChild(celda);
  }

  // 4) FUNCIÓN PARA CREAR LA LEYENDA
  function crearLeyenda(datos) {
    legendDiv.innerHTML = "<h3>Leyenda de Estados</h3>";
    const conteoEstados = {};

    datos.forEach((d) => {
      const estado = d["Estado"] || "";
      conteoEstados[estado] = (conteoEstados[estado] || 0) + 1;
    });

    Object.keys(conteoEstados).forEach((estado) => {
      const colorClase = obtenerClaseEstado(estado);

      const legendItem = document.createElement("div");
      legendItem.classList.add("legend-item");

      const colorBox = document.createElement("span");
      colorBox.classList.add("legend-color", colorClase);

      const text = document.createElement("span");
      text.innerHTML = `<strong>${estado}:</strong> ${conteoEstados[estado]}`;

      legendItem.appendChild(colorBox);
      legendItem.appendChild(text);
      legendDiv.appendChild(legendItem);
    });
  }

  // 5) FUNCIÓN PARA OBTENER LA CLASE DE COLOR SEGÚN EL ESTADO
  function obtenerClaseEstado(estado) {
    if (!estado) return "default";
    switch (estado.toLowerCase()) {
      case "concluído":
        return "concluido";
      case "cancelado execução":
      case "cancelado":
        return "cancelado";
      case "aguardando execução":
        return "aguardando";
      case "elaboração":
        return "elaboracao";
      case "execução":
        return "execucao";
      case "preparação":
        return "preparação";
      default:
        return "default";
    }
  }

  // 6) FILTRO BÁSICO DE TEXTO
  buscador.addEventListener("input", function () {
    const filtro = this.value.toLowerCase();
    const filas = document.querySelectorAll("#tablaEquipos tbody tr");

    filas.forEach((fila) => {
      const textoFila = fila.textContent.toLowerCase();
      fila.style.display = textoFila.includes(filtro) ? "" : "none";
    });
  });

  // 7) MODO OSCURO
  document.getElementById("modoOscuro").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    this.setAttribute(
      "aria-label",
      isDarkMode ? "Activar modo claro" : "Activar modo oscuro"
    );
  });

  // 8) SIDEBAR TOGGLE
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".sidebar-toggle");
  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  // 9) CERRAR SESIÓN
  window.cerrarSesion = function () {
    alert("Cerrando sesión...");
    window.location.href = "/login.html";
  };
});
