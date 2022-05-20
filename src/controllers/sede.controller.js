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

const deleteSede = async(req, res) =>{
  const { id } = req.params;
  try {
      const deleteRowCount = await Sede.destroy({
        where: {
          id: id
        }
      });
      if(deleteRowCount){

        res.render('admin/register-institute')
      }
  } catch (error) {
    res.status(500).json({
      message: 'Algo ha ido mal. No hay datos para mostrar.',
    });
  }
}



const renderCreateSede = async(req, res) =>{
    await res.render('admin/register-institute', {
      message: 'Sede eliminada'
    })
}
export default {
    getSedes,
    createSede,
    renderCreateSede,
    deleteSede
}
