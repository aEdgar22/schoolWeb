import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Sede = sequelize.define('sedes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nombres_sede: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: false
});

export default Sede;