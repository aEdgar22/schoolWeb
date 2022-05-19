import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import users from './user.model.js';

const Materia = sequelize.define('materias', {

  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
  },
  nombre_materia: {
    type: DataTypes.STRING,
    allowNull: false
  },

},{
  timestamps: false
});



export default Materia;
