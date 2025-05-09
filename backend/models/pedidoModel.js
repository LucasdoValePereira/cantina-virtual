const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

const Pedido = sequelize.define('Pedido', {
    senha: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    itens: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    usado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'pedidos',
    timestamps: true
});

module.exports = Pedido;