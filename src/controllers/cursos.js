const ModelCursos = require('../models/cursos');

ModelCursos.sync();

module.exports =
{
    async List(req, res) {
        try {
            const cursos = await ModelCursos.findAll();
            return res.json(cursos);
        } catch (erro) {
            return console.error('Erro na lista: ', erro)
        }
    },

    async Create(req, res) {
        try {
            const cursos = await ModelCursos.create({
                id: req.body.id,
                nomeCurso: req.body.nomeCurso,
                professorResponsavel: req.body.professorResponsavel,
                categoria: req.body.categoria,
                descricao: req.body.descricao,
                imagem: req.body.imagem,
            });


            return res.json(cursos);
        } catch (erro) {
            return console.error('Erro na criacao: ', erro)
        }
    },
    async Update(req, res) {
        try {
            const curso = await ModelCursos.findByPk(req.body.id);
            if (curso) {
                curso.nomeCurso = req.body.nomeCurso;
                curso.professorResponsavel = req.body.professorResponsavel;
                curso.categoria = req.body.categoria;
                curso.descricao = req.body.descricao;
                await curso.save();
            }
            return res.json(cursos);
        } catch (erro) {
            return console.error('Erro na Update: ', erro)
        }
    },
    async GetOne(req, res) {
        try {
            const curso = await ModelCursos.findByPk(req.body.id);
            return res.json(cursos);
        } catch (erro) {
            return console.error('Erro na Update: ', erro)
        }
    },
    async Delete(req, res) {
        try {
            const curso = await ModelCursos.findByPk(req.params.id);

            if (!curso) {
                return res.status(404).json({ error: 'Curso não encontrado' });
            }

            await curso.destroy();
            return res.json({ message: 'Curso excluído com sucesso' });
        } catch (erro) {
            return res.status(500).json({ error: 'Erro ao excluir curso' });
        }
    }
}