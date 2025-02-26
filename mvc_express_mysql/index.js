const sequelize = require('./config/database');

sequelize.sync({ force: false }) // Altere para "true" se quiser recriar tabelas
    .then(() => console.log("✅ Banco de dados sincronizado"))
    .catch(err => console.error("❌ Erro ao sincronizar banco:", err));
