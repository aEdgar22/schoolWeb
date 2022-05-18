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
};

const createCurso = async(req, res) => {
    try {
        const { curso, jornada_id, user_id} = req.body;

        const newCurso = await Curso.create({
            curso,
            jornada_id,
            user_id
        })

        if(newCurso){
            res.render('admin/register-course');
        }
    } catch (error) {
        res.status(500).json({
            message: `ha habído un error: ${error}`
        })
    }
}

export default {
    getCursos,
    renderCreateCurso,
    createCurso
}