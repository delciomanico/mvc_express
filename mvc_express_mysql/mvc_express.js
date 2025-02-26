#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Capturar os argumentos da linha de comando
const args = process.argv;
const index = args.indexOf("-mc");

if (index === -1 || !args[index + 1]) {
    console.log("❌ Uso correto: node generateMVC.js -mc <NomeDoModelo>");
    process.exit(1);
}

const modelName = args[index + 1];
const modelFileName = `${modelName.charAt(0).toUpperCase() + modelName.slice(1)}`;
const modelPath = path.join(__dirname, 'models', `${modelFileName}.js`);
const controllerPath = path.join(__dirname, 'controllers', `${modelFileName}Controller.js`);

// Template do Modelo Sequelize
const modelTemplate = `const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Certifique-se de configurar o Sequelize corretamente

const ${modelFileName} = sequelize.define('${modelFileName}', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false
});

module.exports = ${modelFileName};
`;

// Template do Controller Sequelize
const controllerTemplate = `const ${modelFileName} = require('../models/${modelFileName}');

// Criar um novo registro
exports.create = async (req, res) => {
    try {
        const data = await ${modelFileName}.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obter todos os registros
exports.getAll = async (req, res) => {
    try {
        const data = await ${modelFileName}.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obter um registro por ID
exports.getById = async (req, res) => {
    try {
        const data = await ${modelFileName}.findByPk(req.params.id);
        if (!data) return res.status(404).json({ error: "Registro não encontrado" });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar um registro
exports.update = async (req, res) => {
    try {
        const data = await ${modelFileName}.update(req.body, { where: { id: req.params.id } });
        if (!data[0]) return res.status(404).json({ error: "Registro não encontrado" });
        res.status(200).json({ message: "Registro atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Deletar um registro
exports.delete = async (req, res) => {
    try {
        const data = await ${modelFileName}.destroy({ where: { id: req.params.id } });
        if (!data) return res.status(404).json({ error: "Registro não encontrado" });
        res.status(200).json({ message: "Registro deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
`;

// Criar as pastas se não existirem
if (!fs.existsSync(path.join(__dirname, 'models'))) {
    fs.mkdirSync(path.join(__dirname, 'models'));
}
if (!fs.existsSync(path.join(__dirname, 'controllers'))) {
    fs.mkdirSync(path.join(__dirname, 'controllers'));
}

// Criar os arquivos
fs.writeFileSync(modelPath, modelTemplate, 'utf8');
fs.writeFileSync(controllerPath, controllerTemplate, 'utf8');

console.log(`✅ Modelo criado: models/${modelFileName}.js`);
console.log(`✅ Controller criado: controllers/${modelFileName}Controller.js`);
