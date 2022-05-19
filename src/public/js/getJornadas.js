const comboJornada = document.getElementById('jornada')

//obteniendo data del servidor
const getJornadas = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/jornada/`);
  const data = await res.json();
  const jornadasArray = await data.jornadas;
  const jornadas = [];

  for (let i = 0; i < jornadasArray.length; i++) {
     jornadas.push(jornadasArray[i].jornada);
  }
  return jornadas;

};


//Funcion para llenar comboBox de jornadas dinamicamente
const llenarComboBoxJornada = async (lugar) => {
  const data = await getJornadas();
  let elementos = '<option selected disabled>Seleccione</option>';

  for(let i = 0; i< data.length; i++){
    elementos += `<option value="${[i+1]}">${data[i]}</option>"`
  }
  lugar.innerHTML = elementos
};

llenarComboBoxJornada(comboJornada);
