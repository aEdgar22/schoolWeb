import Curso from "../models/curso.model.js"

const getCursos = async(req, res) =>{
    try {
        const cursos = await Curso.findAll();

        res.status(200).json({
            cursos
        });
    } catch (error) {
        res.status(500).json({
            message: `ha habído un error: ${error}`
        })
    }
}

const renderCreateCurso = async(req, res) =>{
    await res.render('admin/register-course')
}

export default {
    getCursos,
    renderCreateCurso
}