

//borrar sede
const deleteSede = async(id) =>{
   await fetch(`http://localhost:3000/api/v1/sede/delete/${id}`, {
     method: 'DELETE'
   })

   .then( response => {
     alert('eliminado con exito');

    //await llenarTablaSedes();
 })

}



export default deleteSede;
