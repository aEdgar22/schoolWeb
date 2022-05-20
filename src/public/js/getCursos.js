const comboCurso = document.getElementById('curso')

//obteniendo data del servidor
const getCursos = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/curso/`);
  const data = await res.json();
  const cursosArray = await data.cursos;

  return cursosArray;
};

//Funcionar para llenar comboBox de cursos dinamicamente
const llenarComboBoxCursos = async (lugar) => {
  const data = await getCursos();
  let elementos = '<option selected disabled>Seleccione</option>';

  for(let i = 0; i< data.length; i++){
    elementos += `<option value="${data[i].id}">${data[i].curso}</option>"`
  }
  lugar.innerHTML = elementos
};

llenarComboBoxCursos(comboCurso);

