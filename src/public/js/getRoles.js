const comboRoles = document.getElementById('rol');

//obteniendo data del servidor
const getRoles = async () => {
  const res = await fetch(`http://localhost:3000/api/v1/role/`);
  const data = await res.json();
  const rolesArray = await data.roles;
  const roles = [];

  for (let i = 0; i < rolesArray.length; i++) {
    roles.push(rolesArray[i].rol);
  }
  return roles;
};

//Funcionar para llenar comboBox de roles dinamicamente
const llenarComboBoxRoles = async (lugar) => {
  const data = await getRoles();
  let elementos = '<option selected disabled>Seleccione</option>';

  for (let i = 0; i < data.length; i++) {
    elementos += `<option value="${[i + 1]}">${data[i]}</option>"`;
  }
  lugar.innerHTML = elementos;
};

llenarComboBoxRoles(comboRoles);
