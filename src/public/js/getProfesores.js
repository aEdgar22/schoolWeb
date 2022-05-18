const comboProfes = document.getElementById('profesores')

//obteniendo data del servidor
const getProfes = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/user/profesores`);
  const data = await res.json();
  const profesArray = await data.profesores;
  
  return profesArray;
};

//Funcionar para llenar comboBox de profesores dinamicamente
const llenarComboBoxProfes = async (lugar) => {
  const profesArray = await getProfes();
  let elementos = '<option selected disables>Seleccione</option>';

  for(let i = 0; i< profesArray.length; i++){
    elementos += `<option value="${profesArray[i].dni}">${profesArray[i].nombre} ${profesArray[i].primer_apellido}</option>"`
  }
  lugar.innerHTML = elementos
  
};

llenarComboBoxProfes(comboProfes);

