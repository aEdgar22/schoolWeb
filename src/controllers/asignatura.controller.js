import Materia from "../models/asigantura.model.js";


const renderCreateAsignatura = async(req,res) => {
  await res.render('admin/register-matter')
};

const createAsignatura = async(req, res) =>{
  try {
    const { nombre_materia } = req.body;
    const newAsignatura = await Materia.create({
      nombre_materia

    });

    if(newAsignatura){
      res.render('admin/register-matter')
    }
  } catch (error) {
    res.status(500).json({
      message: `ha habído un error: ${error}`
  })
  }
}
export default {
  renderCreateAsignatura,
  createAsignatura
};
