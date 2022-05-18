import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import cursos from './curso.model.js';

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

Jornada.hasMany(cursos, {foreignKey: 'jornada_id', sourceKey: 'id'})
cursos.belongsTo(Jornada, {foreignKey: 'jornada_id', sourceKey: 'id'})

export default Jornada;