const button = document.getElementById('btn-campus');

button.addEventListener('click', (e)=>{
   
    console.log('hola')
    fetch('http://localhost:3000/api/v1/user/singIn')
})