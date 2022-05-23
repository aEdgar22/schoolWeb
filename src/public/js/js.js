const element = document.getElementById('rol')

element.addEventListener('change', () =>{
    const rol_id = element.selectedIndex;

    const curso = document.getElementById('curso')
    const jornada = document.getElementById('jornada')

    if(rol_id === 2 || rol_id === 3){
      curso.setAttribute("disabled", "");
      jornada.setAttribute("disabled", "")
    }else{
      curso.removeAttribute("disabled");
      jornada.removeAttribute("disabled")
    }
})
