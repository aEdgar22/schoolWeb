import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Jornada = sequelize.define('jornadas',{
    id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
     allowNull: false
    },
    jornada: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

export default Jornada;