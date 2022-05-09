import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../database/config.js';

const singUp = async (req, res) => {
  //encriptando la contraseña
  try {
    const { dni, nombre, primer_apellido, segundo_apellido, email, rol_id } = req.body;
    let password = await bcrypt.hashSync(req.body.contraseña, 10);
    //creando usuario
    const newUser = await User.create({
      dni,
      nombre,
      primer_apellido,
      segundo_apellido,
      email,
      contraseña: password,
      rol_id,
    });
    if (newUser) {
      //devolviendo data en json
      delete newUser.dataValues.contraseña;
      res.status(201).json({
        newUser,
      });
   
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const singIn = async (req, res) => {
  let { email, contraseña } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    
    if (!user) {
      res.status(404).json({ message: 'Usuario con este email no encontrado' });
    } else {
      const isMatch = await bcrypt.compareSync(contraseña, user.contraseña);
      if (isMatch) {
        //generar token
        try {
          const payload = {
            sub: user.dni,
            rol: user.rol_id,
          };
          const token = jwt.sign(payload, config.jwt_secret)

          //devolviendo data de login al cliente
          delete user.dataValues.contraseña;
          delete user.dataValues.genero;
          delete user.dataValues.telefono;

          res.status(200).json({
              user,
              token
          })

          if(user.rol_id === 1){
            return res.render('admin')
          }else if(user.rol_id === 2){
            res.render('estudiante')
          }
        } catch (error) {}
      } else {
        res.status(401).json({ message: 'contraseña incorrecta' });
      }
    }
  } catch (error) {
   
    res.status(500).json(`ha habído un error ${error}`);
  }
};

export default {
  singUp,
  singIn,
};
