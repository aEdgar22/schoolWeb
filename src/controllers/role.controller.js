import Role from '../models/rol.model.js';

const getRoles = async(req,res) =>{
    try {
        const roles = await Role.findAll();
        res.status(200).json({
            roles
        });
    } catch (error) {
        res.status(500).json({
            message: `ha habído un error: ${error}`
        })
    }
};

export default {
    getRoles
}