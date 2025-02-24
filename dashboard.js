document.addEventListener("DOMContentLoaded", function () {
  const apiUrl =
    "https://script.google.com/macros/s/AKfycbwlFn3sZYkSIKbXuOh8SP_yrsj8ONW7-jc7Mz5tNfAyILuVpEmdvvJ34qfYHwLhn67V/exec";

  let allData = []; // Aquí almacenaremos todos los datos una vez que se carguen
  const loader = document.getElementById("loader");
  const tablaBody = document.querySelector("#tablaEquipos tbody");
  const legendDiv = document.getElementById("legend");
  const buscador = document.getElementById("buscador");
  const estacaoFilter = document.getElementById("estacaoFilter");

  // 1) FUNCIÓN PARA OBTENER DATOS
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
        allData = datos; // Guardamos todos los datos en la variable global
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

      Object.keys(dato).forEach((clave) => {
        const celda = document.createElement("td");
        celda.textContent = dato[clave];

        if (clave.toLowerCase() === "estado") {
          const colorClase = obtenerClaseEstado(dato[clave]);
          celda.classList.add("estado", colorClase);
        }
        fila.appendChild(celda);
      });

      tablaBody.appendChild(fila);
    });
  }

  // 4) FUNCIÓN PARA CREAR LA LEYENDA
  function crearLeyenda(datos) {
    legendDiv.innerHTML = "<h3>Leyenda de Estados</h3>";
    const conteoEstados = {};

    datos.forEach((d) => {
      const estado = d["Estado"];
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
      default:
        return "default";
    }
  }

  // 6) FUNCIÓN PARA APLICAR FILTROS (BUSCADOR Y ESTACIÓN)
  function applyFilters() {
    const filtroTexto = buscador.value.toLowerCase();
    const filtroEstacao = estacaoFilter.value.toLowerCase();

    // Filtramos la data en memoria (allData)
    const datosFiltrados = allData.filter((item) => {
      // Convertimos todo el objeto a string para el filtro de texto
      const rowText = Object.values(item).join(" ").toLowerCase();

      // Coincidencia con el texto del buscador
      const matchTexto = rowText.includes(filtroTexto);

      // Coincidencia con la estación (solo si estacaoFilter no está vacío)
      // Nota: en la data, la propiedad "Estação" puede llamarse "Estacao" o "Estação". Ajusta según tu JSON real.
      const estacionActual = (item["Estação"] || "Estacao").toLowerCase();
      const matchEstacao =
        !filtroEstacao || estacionActual.includes(filtroEstacao);

      return matchTexto && matchEstacao;
    });

    // Volvemos a llenar la tabla con los datos filtrados
    llenarTabla(datosFiltrados);
  }

  // 7) EVENTOS: FILTRO DE TEXTO Y SELECT DE ESTACIÓN
  buscador.addEventListener("input", applyFilters);
  estacaoFilter.addEventListener("change", applyFilters);

  // 8) MODO OSCURO
  document.getElementById("modoOscuro").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    this.setAttribute(
      "aria-label",
      isDarkMode ? "Activar modo claro" : "Activar modo oscuro"
    );
  });

  // 9) SIDEBAR TOGGLE
  const sidebar = document.querySelector(".sidebar");
  const toggleBtn = document.querySelector(".sidebar-toggle");
  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  // 10) CERRAR SESIÓN
  window.cerrarSesion = function () {
    alert("Cerrando sesión...");
    window.location.href = "/login.html";
  };
});
