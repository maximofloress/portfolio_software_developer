const cargarServiciosSegunFiltro = async () => {
  const filtro = document.getElementById('filtroInput').value.trim();
  console.log(filtro)
  const data = await fetch(`http://localhost:3000/Servicios?descripcion=${filtro}`)
  const servicios = await data.json();

  const tablaDetalle = document.getElementById("tabla-detalle") 
  servicios.forEach( (servicio) => {
    const row = `
    <tr>
      <td>${servicio.nombre}</td>
      <td>${servicio.descripcion}</td> 
      <td>${servicio.precio}</td> 
      <td>${servicio.frecuencia}</td> 
      <td>${servicio.duracion_horas}</td> 
      <td>${servicio.fecha_inicio}</td>  
    </tr> 
    `
    tablaDetalle.innerHTML += row
  });
};


