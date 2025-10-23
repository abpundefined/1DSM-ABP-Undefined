const express = require('express');
// const multer = require('multer');
// const path = require('path');
const Publicacao = require('../models/publicacao');
const router = express.Router();

//ROTA PARA BUSCAR TODAS AS PUBLICAÇÕES, com filtro basico
router.get('/', async (req, res) => {
    try {
        const { id, ano, titulo, page = 1, limit = 10 } = req.query;

        const where = {};
        if (id) {
            const parsedId = parseInt(id, 10);
            if (Number.isNaN(parsedId)) return res.status(400).json({ erro: 'id inválido' });
            where.PublicacaoID = parsedId;
        }
        if (ano) {
            const parsedAno = parseInt(ano, 10);
            if (Number.isNaN(parsedAno)) return res.status(400).json({ erro: 'ano inválido' });
            where.PublicacaoAno = parsedAno;
        }
        if (titulo) {
            where.PublicacaoTitulo = titulo;
        }

        const parsedLimit = Math.min(Math.max(parseInt(limit, 10) || 10, 1), 100);
        const parsedPage = Math.max(parseInt(page, 10) || 1, 1);
        const offset = (parsedPage - 1) * parsedLimit;

        const publicacoes = await Publicacao.findAll({
            where,
            limit: parsedLimit,
            offset,
            order: [['PublicacaoAno', 'DESC']]
        });

        res.json({ page: parsedPage, limit: parsedLimit, results: publicacoes });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar publicações', detalhes: error.message });
    }
});

//ROTA PARA BUSCAR UMA UNICA PUBLICAÇÃO
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const parsedId = parseInt(id, 10);
        if (Number.isNaN(parsedId)) return res.status(400).json({ erro: 'id inválido' });

        const publicacao = await Publicacao.findOne({ where: { PublicacaoID: parsedId } });
        if (!publicacao) return res.status(404).json({ erro: 'Publicação não encontrada' });

        res.json(publicacao);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar publicação', detalhes: error.message });
    }
});

module.exports = router;