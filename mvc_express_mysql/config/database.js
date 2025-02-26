const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
});

sequelize.authenticate()
    .then(() => console.log("✅ Conectado ao banco de dados!"))
    .catch(err => console.error("❌ Erro ao conectar ao banco:", err));

module.exports = sequelize;
