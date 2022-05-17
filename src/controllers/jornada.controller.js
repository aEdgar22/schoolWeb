import Jornada from "../models/jornada.model.js"

const getJornadas = async(req, res) => {
    try {
        const jornadas = await Jornada.findAll();
        res.status(200).json({
            jornadas
        });
    } catch (error) {
        res.status(500).json({
            message: `ha habído un error: ${error}`
        })
    }
}



export default {
    getJornadas
}