const comboSede = document.getElementById('sede')

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

//Funcionar para llenar comboBox de sedes dinamicamente
const llenarComboBox = async (lugar) => {
  const data = await getSedes();
  let elementos = '<option selected disables>Seleccione</option>';

  for(let i = 0; i< data.length; i++){
    elementos += `<option value="${[i+1]}">${data[i]}</option>"`
  }
  lugar.innerHTML = elementos
};

llenarComboBox(comboSede);

