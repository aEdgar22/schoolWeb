const table = document.getElementById('table');
let tableBody = document.createElement('tbody');

//obteniendo data del servidor
const getAsignaturas = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/asignatura/`);
  const data = await res.json();
  const asignaturasArray = await data.asignaturas;
  const asignaturas = [];

  for (let i = 0; i < asignaturasArray.length; i++) {
    asignaturas.push(asignaturasArray[i].nombre_materia);
  }
  return asignaturas;
};
getAsignaturas()


const llenarTablaAsignaturas = async () =>{
  const asignaturas = await getAsignaturas();

  asignaturas.forEach(asignatura => {

      let icono1 =  document.createElement('i');
      let icono2 =  document.createElement('i');
      let fila = document.createElement('tr');
      let td = document.createElement('td');

      td.innerText = asignatura;
      td.className = "row";
      fila.appendChild(td);

      td = document.createElement('td');
      td.className = "row";
      icono1.className = "fa-solid fa-pen";
      icono2.className = "fa-solid fa-trash";
      td.appendChild(icono1);
      td.appendChild(icono2);
      fila.appendChild(td);

      tableBody.appendChild(fila)

  });
  table.appendChild(tableBody)

}
llenarTablaAsignaturas();

