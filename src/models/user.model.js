import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

 const User = sequelize.define('users', {
  dni: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primer_apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  segundo_apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  primer_apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },/*
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },*/
  genero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rol_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  /*
  curso_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sede_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  tipo_doc_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ciudad_dep_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }*/

},
{
  timestamps: false
});

export default User;