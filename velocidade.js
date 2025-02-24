document.addEventListener("DOMContentLoaded", function () {
  const datosVelocidad = [
    {
      placa: "RUL7G44",
      equipe: "",
      tipo: "Leve",
      limite: 105,
      sector: "Viabilização",
      responsable: "Marcelo de Aguiar",
      semana06: [true, true, false, false, true, false, false],
      semana07: [false, true, false, true, false, false, false],
      semana08: [true, true, true, false, false, true, true],
      semana09: [true, true, false, false, false, false, false],
    },
    {
      placa: "FKC3H24",
      equipe: "",
      tipo: "Leve",
      limite: 105,
      sector: "Coordenação",
      responsable: "Marcos Andrade",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "RVU6J86",
      equipe: "",
      tipo: "Leve",
      limite: 85,
      sector: "SESMT",
      responsable: "Macoly Lima",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, true, false, false],
      semana08: [false, false, false, false, false, true, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SYP3C40",
      equipe: "",
      tipo: "Leve",
      limite: 105,
      sector: "Operação",
      responsable: "Valdecir Conceição",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, true, false, false, false],
      semana09: [false, true, false, false, false, false, false],
    },
    {
      placa: "SYP3C56",
      equipe: "",
      tipo: "Leve",
      limite: 105,
      sector: "Encerramento",
      responsable: "Teilor Santin",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SYP3C58",
      equipe: "",
      tipo: "Leve",
      limite: 105,
      sector: "SESMT",
      responsable: "Ismar Junior",
      semana06: [false, false, false, false, false, true, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, true, false],
      semana09: [false, false, false, false, false, false, false],
    },
    // "Termina" = Leve.
    {
      placa: "GBA4D84",
      equipe: "",
      tipo: "Pickup 4x2",
      limite: 105,
      sector: "Operação",
      responsable: "Gustavo Motta",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    // "Termina" = Pickup 4x2.
    {
      placa: "SQV7J14",
      equipe: "",
      tipo: "Pickup 4x4",
      limite: 105,
      sector: "Coordenação",
      responsable: "Anselmo Bundchen",
      semana06: [false, false, false, true, false, true, true],
      semana07: [false, false, false, false, true, false, true],
      semana08: [false, false, false, true, false, false, true],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SRU1A60",
      equipe: "",
      tipo: "Pickup 4x4",
      limite: 105,
      sector: "Operação",
      responsable: "Janquiel Azzolini",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, true, true, false],
      semana08: [false, true, false, false, false, false, true],
      semana09: [false, false, false, false, false, false, false],
    },
    // "Termina" = Pickup 4x4.
    {
      placa: "SRT0D49",
      equipe: "ERE-RETRO1",
      tipo: "Cesto Simples",
      limite: 85,
      sector: "Operação",
      responsable: "Flaviomar Morandi",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, true, false, true, true, false],
      semana09: [false, false, false, false, false, false, false],
    },
    // "Termina" = Prancha.
    {
      placa: "RKF5C09",
      equipe: "ERE5019",
      tipo: "Cesto Simples",
      limite: 85,
      sector: "Operação",
      responsable: "Marcos Vassoler",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, true, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "JBX0H60",
      equipe: "ERE6083",
      tipo: "Cesto Simples",
      limite: 85,
      sector: "Operação",
      responsable: "",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SRU5E40",
      equipe: "ERE6084",
      tipo: "Cesto Simples",
      limite: 85,
      sector: "Operação",
      responsable: "",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    // "Termina" = Cesto Simples.
    {
      placa: "JBI4B29",
      equipe: "ERE5299",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Alessandro Polinski",
      semana06: [false, false, true, false, false, false, false],
      semana07: [false, false, true, false, false, false, false],
      semana08: [false, true, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "RHO5E98",
      equipe: "ERE5282",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Silvano Freitas ",
      semana06: [true, false, true, true, true, true, false],
      semana07: [false, false, true, true, true, true, true],
      semana08: [false, false, true, true, true, false, true],
      semana09: [true, false, false, false, false, false, false],
    },
    {
      placa: "RHU1A79",
      equipe: "ERE5283",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Reserva",
      semana06: [false, false, false, false, false, false, true],
      semana07: [false, false, false, true, true, false, false],
      semana08: [false, false, false, true, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "RHU8E54",
      equipe: "ERE5284",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Mizael de Oliveira",
      semana06: [true, false, false, false, true, false, false],
      semana07: [false, false, false, false, true, true, false],
      semana08: [true, true, false, false, false, false, true],
      semana09: [true, true, false, false, false, false, false],
    },
    {
      placa: "SEV4F24",
      equipe: "",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Edevandro Pinto",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SEX1H79",
      equipe: "ERE5382",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Pedro Rafael Dalverto",
      semana06: [false, false, true, false, true, false, false],
      semana07: [false, false, false, false, true, true, true],
      semana08: [true, true, false, true, true, true, true],
      semana09: [true, true, false, false, false, false, false],
    },
    {
      placa: "SEX2J64",
      equipe: "ERE-RETRO02",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Andrei Zotti",
      semana06: [false, false, true, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SEX2J65",
      equipe: "ERE5278",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Flavio Ernandes",
      semana06: [false, false, false, false, true, false, false],
      semana07: [false, false, false, false, true, true, true],
      semana08: [false, false, false, true, true, true, true],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SFL6H15",
      equipe: "ERE5298",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Giliardi Castilhos",
      semana06: [false, false, false, true, false, false, true],
      semana07: [true, false, true, false, true, false, true],
      semana08: [false, false, true, true, false, true, true],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SQY7J60",
      equipe: "ERE5643",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Jean Carlos Bianchi",
      semana06: [false, false, false, false, false, true, false],
      semana07: [false, false, false, false, true, true, true],
      semana08: [true, true, false, true, true, true, true],
      semana09: [true, true, false, false, false, false, false],
    },
    {
      placa: "SRA3A32",
      equipe: "ERE5375",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Tiago Moreira",
      semana06: [false, false, false, false, false, true, false],
      semana07: [false, false, false, false, false, false, true],
      semana08: [true, false, true, true, true, true, true],
      semana09: [false, true, false, false, false, false, false],
    },
    {
      placa: "RJE7A86",
      equipe: "ERE5281",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "Adelar Muller",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SEV4F26",
      equipe: "ERE5416",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SDQ9D21",
      equipe: "",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    {
      placa: "SFL6H18",
      equipe: "",
      tipo: "Munck 16T",
      limite: 85,
      sector: "Operação",
      responsable: "",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },

    // "Termina" = Munck 16T.
    {
      placa: "BEN3A83",
      equipe: "",
      tipo: "Munck 30T",
      limite: 85,
      sector: "Operação",
      responsable: "Alisson dos Santos",
      semana06: [false, false, false, false, false, false, false],
      semana07: [false, false, false, false, false, false, false],
      semana08: [false, false, false, false, false, false, false],
      semana09: [false, false, false, false, false, false, false],
    },
    // "Termina" = Munck 30T.
  ];

  // Generar filas de la tabla
  const tbody = document.querySelector("#tablaVelocidade tbody");
  tbody.innerHTML = ""; // limpiar contenido previo

  datosVelocidad.forEach((item) => {
    // Crear fila
    const fila = document.createElement("tr");

    // Columnas fijas
    crearCelda(fila, item.placa);
    crearCelda(fila, item.equipe);
    crearCelda(fila, item.tipo);
    crearCelda(fila, item.limite);
    crearCelda(fila, item.sector);
    crearCelda(fila, item.responsable);

    // Semana 06 => 7 días
    item.semana06.forEach((dia) => {
      fila.appendChild(crearCeldaDia(dia));
    });
    // Semana 07 => 7 días
    item.semana07.forEach((dia) => {
      fila.appendChild(crearCeldaDia(dia));
    });
    // Semana 08 => 7 días
    item.semana08.forEach((dia) => {
      fila.appendChild(crearCeldaDia(dia));
    });
    // Semana 09 => 7 días
    item.semana09.forEach((dia) => {
      fila.appendChild(crearCeldaDia(dia));
    });

    tbody.appendChild(fila);
  });

  // ====== FUNCIÓN PARA GENERAR LA LEYENDA DE EXCESOS ======
  function generarLeyenda(datos) {
    // Creamos un contenedor
    const contenedorLeyenda = document.createElement("div");
    contenedorLeyenda.classList.add("legend-container");

    // Título
    const titulo = document.createElement("h2");
    titulo.textContent = "Resumo dos Excessos";
    contenedorLeyenda.appendChild(titulo);

    // Calculamos los excesos totales por responsable
    const mapExcesos = {};

    datos.forEach((item) => {
      const { responsable, semana06, semana07, semana08, semana09 } = item;
      const total06 = semana06.reduce((acc, val) => acc + (val ? 1 : 0), 0);
      const total07 = semana07.reduce((acc, val) => acc + (val ? 1 : 0), 0);
      const total08 = semana08.reduce((acc, val) => acc + (val ? 1 : 0), 0);
      const total09 = semana09.reduce((acc, val) => acc + (val ? 1 : 0), 0);

      const total = total06 + total07 + total08 + total09;

      if (!mapExcesos[responsable]) {
        mapExcesos[responsable] = 0;
      }
      mapExcesos[responsable] += total;
    });

    // Creamos una lista para mostrar la info
    const lista = document.createElement("ul");

    // Recorremos cada responsable y su total de excesos
    let alguienExcedio = false;
    for (let [resp, total] of Object.entries(mapExcesos)) {
      if (total > 0) {
        alguienExcedio = true;
        const li = document.createElement("li");
        // Incluimos el círculo rojo y el texto
        li.innerHTML = `<span class="circle exceeded"></span> <strong>${resp}</strong> excedió ${total} ${
          total === 1 ? "vez" : "vezes"
        }`;
        lista.appendChild(li);
      }
    }

    // Si nadie excedió, mostrar un mensaje
    if (!alguienExcedio) {
      const li = document.createElement("li");
      li.textContent = "Ningún colaborador excedió los límites.";
      lista.appendChild(li);
    }

    contenedorLeyenda.appendChild(lista);

    return contenedorLeyenda;
  }

  // Insertamos la leyenda al final de la sección .main-content
  const leyenda = generarLeyenda(datosVelocidad);
  document.querySelector(".main-content").appendChild(leyenda);

  // ====== FUNCIONES AUXILIARES ======
  function crearCelda(fila, texto) {
    const td = document.createElement("td");
    td.textContent = texto;
    fila.appendChild(td);
  }

  function crearCeldaDia(excedio) {
    const td = document.createElement("td");
    if (excedio) {
      const span = document.createElement("span");
      span.classList.add("circle", "exceeded");
      td.appendChild(span);
    } else {
      td.textContent = "";
    }
    return td;
  }

  // FILTRO EN LA TABLA
  window.filtrarTabla = function () {
    const filtro = document.getElementById("searchInput").value.toLowerCase();
    const filas = document.querySelectorAll("#tablaVelocidade tbody tr");

    filas.forEach((fila) => {
      const textoFila = fila.textContent.toLowerCase();
      fila.style.display = textoFila.includes(filtro) ? "" : "none";
    });
  };

  // Función para cerrar sesión (personalizable)
  window.cerrarSesion = function () {
    alert("Cerrando sesión...");
    window.location.href = "/login.html";
  };
});
