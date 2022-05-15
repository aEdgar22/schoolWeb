const form = document.getElementById('login');

form.addEventListener("submit", (e) =>{
    e.preventDefault();
     let loginFormData = new FormData(form);
     let newLoginData = convertData(loginFormData);
     
    //usar axios 
    fetch('http://localhost:3000/api/v1/user/singIn',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(newLoginData),
    }).then(res => res.json()).then( data =>{
        console.log(data)
    })
    //fetch('http://localhost:3000/api/v1/user/admin')

});


const convertData = (loginFormData) =>{
    let email = loginFormData.get('email')
    let contraseña = loginFormData.get('contraseña')

    return  {
        email,
        contraseña
    }
}