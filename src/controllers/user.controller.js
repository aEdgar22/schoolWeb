const landing = async (req, res) => {
    await res.render('landing')
  };

const login = async (req,res) =>{
  await res.render('login')
}

const admin = async(req, res) => {
  await res.render('admin/home-admin')
}

const estudiante = async(req, res) =>{
  await res.render('students/home-student')
}

const profesor = async(req, res) =>{
  await res.render('teachers/home-teacher')
}
export default {
    landing,
    login,
    admin,
    estudiante,
    profesor
}
