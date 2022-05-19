import Sede from '../models/sede.model.js'


const getSedes = async(req, res) => {
    try {
        const sedes = await Sede.findAll();

        res.status(200).json({
            sedes
        });
    } catch (error) {
        res.status(500).json({
            message: `ha habído un error: ${error}`
        })
    }
};

const createSede = async(req, res) => {
    try {
        let { nombres_sede } = req.body;

        const newSede = await Sede.create({
            nombres_sede
        })
        if(newSede){
          res.render('admin/register-institute')
        }
    } catch (error) {
        res.status(500).json({
            message: `ha habído un error: ${error}`
        })
    }
};

const renderCreateSede = async(req, res) =>{
    await res.render('admin/register-institute')
}
export default {
    getSedes,
    createSede,
    renderCreateSede
}
