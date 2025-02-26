const Usuario = require('../models/Usuario');

// Criar um novo registro
exports.create = async (req, res) => {
    try {
        const data = await Usuario.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obter todos os registros
exports.getAll = async (req, res) => {
    try {
        const data = await Usuario.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obter um registro por ID
exports.getById = async (req, res) => {
    try {
        const data = await Usuario.findById(req.params.id);
        if (!data) return res.status(404).json({ error: "Registro não encontrado" });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar um registro
exports.update = async (req, res) => {
    try {
        const data = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ error: "Registro não encontrado" });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Deletar um registro
exports.delete = async (req, res) => {
    try {
        const data = await Usuario.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ error: "Registro não encontrado" });
        res.status(200).json({ message: "Registro deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.teste = (req, res) =>{
    res.send("controleer");
}