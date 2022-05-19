const table = document.getElementById('table');
let tableBody = document.createElement('tbody');

//obteniendo data del servidor
const getSedes = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/sede/`);
  const data = await res.json();
  const sedesArray = await data.sedes;
  const nombresSede = [];

  for (let i = 0; i < sedesArray.length; i++) {
     nombresSede.push(sedesArray[i].nombres_sede);
  }
  return nombresSede;
};


const llenarTablaSedes = async () =>{
  const sedes = await getSedes();

  Object.values(sedes).forEach(sede => {

      let icono1 =  document.createElement('i');
      let icono2 =  document.createElement('i');
      let fila = document.createElement('tr');
      let td = document.createElement('td');

      td.innerText = sede;
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
llenarTablaSedes();
