document.addEventListener("DOMContentLoaded", function () {
  // Simulación de datos
  const datosEquipos = [
    {
      supervisor: "Gustavo",
      equipos: [
        {
          prefijo: "ERE5643",
          encarregado: "RICARDO",
          motorista: "LEONARDO",
          eletricista1: "PTIAGO M",
          eletricista2: "PAULO RICARDO",
          auxiliar1: "FERNANDO",
          auxiliar2: "LORENZO",
          auxiliar3: "GABRIEL",
        },
        {
          prefijo: "ERE5281",
          encarregado: "JOSE",
          motorista: "ADELAR",
          eletricista1: "SEBASTIAO",
          eletricista2: "MAURICIO",
          eletricista3: "FELIPE MOURA",
          auxiliar1: "PEDRO H",
          auxiliar2: "BERNARDO",
        },
        {
          prefijo: "ERE5284",
          encarregado: "CLEBER",
          motorista: "FLAVIO",
          eletricista1: "VILMAR",
          eletricista2: "FELIPE MED",
          auxiliar1: "EVERTON",
          auxiliar2: "JOEL",
          auxiliar3: "PEDRO JR",
        },
        {
          prefijo: "ERE6083",
          eletricista1: "ADILIO",
          eletricista2: "ANDRE",
        },
        {
          prefijo: "ERE5019",
          motorista: "MARCOS",
        },
        // Agrega hasta 5 equipos para Gustavo
      ],
    },
    {
      supervisor: "Janquiel",
      equipos: [
        {
          prefijo: "ERE5299",
          encarregado: "NILSO",
          motorista: "ALESSANDRO",
          eletricista1: "KEVIN",
          eletricista2: "VINICUS",
          eletricista3: "WAGNER",
          auxiliar1: "EDUARDO",
          auxiliar2: "BRUNO L",
        },
        {
          prefijo: "ERE5375",
          encarregado: "MAURICIO",
          motorista: "ESTEBAN",
          eletricista1: "AV NER",
          eletricista2: "RODRIGO",
          eletricista3: "DOUGLAS",
          auxiliar1: "BRUNO",
          auxiliar2: "JONATHAN",
        },
        {
          prefijo: "ERE5416",
          encarregado: "DANIEL",
          motorista: "MARCIANO",
          eletricista1: "EMERSON",
          eletricista2: "FABIANO",
          auxiliar1: "JAVIER",
          auxiliar2: "DIEGO",
          auxiliar3: "KLEITON",
        },
        {
          prefijo: "ERE5282",
          encarregado: "LUCIANDRO",
          motorista: "SILVANO",
          eletricista1: "LUCAS",
          eletricista2: "L FELIPE",
          eletricista3: "ADELAR",
          eletricista4: "ADELAR",
          auxiliar1: "EBERTON",
        },
        {
          prefijo: "ERE5298",
          encarregado: "LUIZ",
          motorista: "ANDREI",
          eletricista1: "MATEUS",
          eletricista2: "DOUGLAS",
          eletricista3: "LUCIANO",
          eletricista4: "MATEUS",
          auxiliar1: "KAINA",
        },
        {
          prefijo: "ERE6084",
          eletricista1: "VIVIANO",
          eletricista2: "MARIVALDO",
          eletricista3: "ADBAN",
        },
        // Agrega hasta 6 equipos para Janquiel
      ],
    },
    {
      supervisor: "Valdecir",
      equipos: [
        {
          prefijo: "ERE-RETRO1",
          encarregado: "FLAVIOMAR",
        },
        {
          prefijo: "ERE-RETRO02",
          encarregado: "LUCIANDRO",
        },
      ],
    },
  ];

  // Función para renderizar los equipos
  function renderizarEquipos(datos) {
    const equiposLista = document.getElementById("equiposLista");
    equiposLista.innerHTML = ""; // Limpiar contenido previo

    datos.forEach((item) => {
      // Crear sección para cada supervisor
      const supervisorDiv = document.createElement("div");
      supervisorDiv.classList.add("supervisor");

      const supTitulo = document.createElement("h2");
      supTitulo.textContent = `Supervisor: ${item.supervisor}`;
      supervisorDiv.appendChild(supTitulo);

      // Contenedor para los equipos (tarjetas en fila)
      const teamsContainer = document.createElement("div");
      teamsContainer.classList.add("teams-container");

      // Crear tarjetas para cada equipo
      item.equipos.forEach((equipo) => {
        const teamCard = document.createElement("div");
        teamCard.classList.add("team-card");

        // Encabezado con círculo y prefijo
        const teamHeader = document.createElement("div");
        teamHeader.classList.add("team-header");

        const circle = document.createElement("span");
        circle.classList.add("team-circle");
        // Asigna color según supervisor
        if (item.supervisor.toLowerCase() === "gustavo") {
          circle.style.backgroundColor = "green";
        } else if (item.supervisor.toLowerCase() === "janquiel") {
          circle.style.backgroundColor = "red";
        } else {
          circle.style.backgroundColor = "gray";
        }

        const teamPrefix = document.createElement("span");
        teamPrefix.classList.add("team-prefix");
        teamPrefix.textContent = equipo.prefijo;

        teamHeader.appendChild(circle);
        teamHeader.appendChild(teamPrefix);
        teamCard.appendChild(teamHeader);

        // Lista de colaboradores (detalles del equipo)
        const lista = document.createElement("ul");
        for (const rol in equipo) {
          if (rol !== "prefijo") {
            const li = document.createElement("li");
            li.textContent = `${capitalize(rol)}: ${equipo[rol]}`;
            lista.appendChild(li);
          }
        }
        teamCard.appendChild(lista);
        teamsContainer.appendChild(teamCard);
      });

      supervisorDiv.appendChild(teamsContainer);
      equiposLista.appendChild(supervisorDiv);
    });
  }

  // Función auxiliar para capitalizar la primera letra
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Función para filtrar equipos según búsqueda
  function filtrarEquipos() {
    const filtro = document.getElementById("searchInput").value.toLowerCase();
    const supervisorDivs = document.querySelectorAll(
      "#equiposLista .supervisor"
    );

    supervisorDivs.forEach((supDiv) => {
      // Filtrar por supervisor
      const supNombre = supDiv.querySelector("h2").textContent.toLowerCase();
      let mostrarSupervisor = supNombre.includes(filtro);

      // Filtrar cada tarjeta de equipo
      const teamCards = supDiv.querySelectorAll(".team-card");
      teamCards.forEach((card) => {
        const textoCard = card.textContent.toLowerCase();
        if (textoCard.includes(filtro)) {
          card.style.display = "block";
          mostrarSupervisor = true;
        } else {
          card.style.display = "none";
        }
      });

      // Mostrar u ocultar la sección del supervisor según corresponda
      supDiv.style.display = mostrarSupervisor ? "block" : "none";
    });
  }

  // Renderizamos los datos al cargar
  renderizarEquipos(datosEquipos);

  // Agregar el evento de filtrado
  document
    .getElementById("searchInput")
    .addEventListener("input", filtrarEquipos);
  window.filtrarEquipos = filtrarEquipos;

  // Función para cerrar sesión
  window.cerrarSesion = function () {
    alert("Cerrando sesión...");
    window.location.href = "/login.html";
  };

  // (Opcional) Actualización en tiempo real, si fuera necesario:\n  // setInterval(() => renderizarEquipos(datosEquipos), 60000);
});
