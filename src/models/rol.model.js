import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import users from "./user.model.js";

export const Role = sequelize.define('roles', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: false
}
);

Role.hasMany(users, {foreignKey: 'rol_id', sourceKey: 'id'})
users.belongsTo(Role, {foreignKey: 'rol_id', sourceKey: 'id'})