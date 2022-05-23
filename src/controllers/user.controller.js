import User from '../models/user.model.js'

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

const singUp = async(req, res) =>{
  await res.render('admin/register-users')
}

const getProfesores = async(req, res)=>{
  try {
    const profesores = await User.findAll({
      where: {
        rol_id: 2
      }
    })

    res.status(200).json({
      profesores
    });
} catch (error) {
    res.status(500).json({
        message: `ha habído un error: ${error}`
    })
}
}
const instEstu  = async(req, res) => {
  await res.render('admin/students-list')
}

const instProf  = async(req, res) => {
  await res.render('admin/teacher-list.hbs')
}

const asignarArea = async(req, res) =>{
  await res.render('admin/assign-area')
}
export default {
    landing,
    login,
    admin,
    estudiante,
    profesor,
    singUp,
    getProfesores,
    asignarArea,
    instProf,
    instEstu
}
