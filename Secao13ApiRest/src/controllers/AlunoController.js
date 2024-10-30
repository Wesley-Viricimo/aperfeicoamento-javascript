import Aluno from '../models/Aluno';
import Foto from '../models/Fotos';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename', 'url']
      }
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const { email } = req.body;
      const aluno = await Aluno.findOne({
        where: {
          email
        }
      });

      if(aluno) {
        return res.status(400).json({
          errors: ['Email já cadastrado no sistema!']
        });
      }

      const novoAluno = await Aluno.create(req.body);
      return res.json(novoAluno);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map(e => e.message)
      })
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: ['Id deve ser informado!']
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['filename', 'url']
        }
      });

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe na base de dados!']
        });
      }

      return res.json(aluno)
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map(e => e.message)
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: ['Id deve ser informado!']
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe na base de dados!']
        });
      }

      await aluno.destroy();

      return res.json({
        message: 'Aluno excluído com sucesso!'
       })
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map(e => e.message)
      })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({
          errors: ['Id deve ser informado!']
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe na base de dados!']
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json(alunoAtualizado);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map(e => e.message)
      })
    }
  }
}

export default new AlunoController();
