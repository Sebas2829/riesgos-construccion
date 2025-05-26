const datos = {
  "Obras Preliminares": [
    {
      nombre: "Limpieza manual del terreno",
      riesgos: [
        ["Caída de objetos", "Moderado", "Casco, delimitación del área"],
        ["Cortes", "Bajo", "Uso de guantes"]
      ]
    },
    {
      nombre: "Excavación de hoyos para anclaje",
      riesgos: [
        ["Colapso del terreno", "Alto", "Entibados, señalización"],
        ["Esfuerzo físico excesivo", "Medio", "Uso de herramientas adecuadas"]
      ]
    }
  ],
  "Desbanque Manual": [
    {
      nombre: "Pico y pala en zanja",
      riesgos: [
        ["Golpes en extremidades", "Medio", "EPP, capacitación"]
      ]
    }
  ]
};

const procesosSelect = document.getElementById('procesos');
const actividadesSelect = document.getElementById('actividades');
const tablaDiv = document.getElementById('tabla-riesgos');

// Cargar procesos
for (const proceso in datos) {
  const option = document.createElement('option');
  option.value = proceso;
  option.textContent = proceso;
  procesosSelect.appendChild(option);
}

procesosSelect.addEventListener('change', () => {
  actividadesSelect.innerHTML = '<option value="">-- Selecciona --</option>';
  tablaDiv.innerHTML = "";

  const actividades = datos[procesosSelect.value] || [];
  actividades.forEach((actividad, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = actividad.nombre;
    actividadesSelect.appendChild(option);
  });
});

actividadesSelect.addEventListener('change', () => {
  const proceso = procesosSelect.value;
  const actividadIndex = actividadesSelect.value;
  const actividad = datos[proceso]?.[actividadIndex];

  if (actividad) {
    let html = `<h3>Tabla de Riesgos: ${actividad.nombre}</h3>`;
    html += `<table border="1" cellpadding="5"><tr><th>Riesgo</th><th>Nivel</th><th>Medidas</th></tr>`;
    actividad.riesgos.forEach(r => {
      html += `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`;
    });
    html += `</table>`;
    tablaDiv.innerHTML = html;
  }
});
