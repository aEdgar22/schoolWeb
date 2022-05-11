const landing = async (req, res) => {
    await res.render('landing')
  };

const login = async (req,res) =>{
  await res.render('login')
} 

const admin = async(req, res) => {
  await res.render('admin')
}

const estudiante = async(req, res) =>{
  await res.render('students/home.hbs')
}
  
export default {
    landing,
    login,
    admin,
    estudiante
}