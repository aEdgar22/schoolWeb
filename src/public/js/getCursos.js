const comboCurso = document.getElementById('curso')

//obteniendo data del servidor
const getCursos = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/curso/`);
  const data = await res.json();
  const cursosArray = await data.cursos;
  const cursos = [];

  for (let i = 0; i < cursosArray.length; i++) {
    cursos.push(cursosArray[i].curso);
  }
  return cursos;
};

//Funcionar para llenar comboBox de cursos dinamicamente
const llenarComboBoxCursos = async (lugar) => {
  const data = await getCursos();
  let elementos = '<option selected disabled>Seleccione</option>';

  for(let i = 0; i< data.length; i++){
    elementos += `<option value="${[i+1]}">${data[i]}</option>"`
  }
  lugar.innerHTML = elementos
};

llenarComboBoxCursos(comboCurso);

