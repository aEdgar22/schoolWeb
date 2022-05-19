const table = document.getElementById('table');
let tableBody = document.createElement('tbody');

//obteniendo data del servidor
const getCursos = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/curso/`);
  const data = await res.json();
  const cursosArray = await data.cursos;

  return cursosArray;
};



const llenarTablaCursos = async () =>{
  const cursos = await getCursos();

  Object.values(cursos).forEach(curso => {

      let icono1 =  document.createElement('i');
      let icono2 =  document.createElement('i');
      let fila = document.createElement('tr');
      let td = document.createElement('td');

      td.innerText = curso.curso;
      td.className = "row";
      fila.appendChild(td);


      td = document.createElement('td');
      td.className = "row";
      if(curso.jornada_id === 1){
        td.innerText = 'Mañana';
      }else{
        td.innerText = 'tarde';
      }
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
llenarTablaCursos();
