import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email});
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  async index(req, res) {
    try {
      const [{id, nome, email}] = await User.findAll();
      return res.json([{id, nome, email}]);
    } catch (erro) {
      console.log({erro})
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if(!user) {
        return res.json({
          errors: ['Não existe um usuário com o ID informado!']
        })
      }

      const { id, nome, email } = user;

      return res.json({ id, nome, email});
    } catch (erro) {
      console.log({erro});
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;

      console.log({id});
      if(!id) {
        return res.status(400).json({
          errors: ['ID não informado!']
        })
      }

      const user = await User.findByPk(id);

      if(!user) {
        return  res.status(404).json({
          errors: ['Não existe um usuário com o ID informado!']
        })
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;

      if(!id) {
        return res.status(400).json({
          errors: ['ID não informado!']
        })
      }

      const user = await User.findByPk(id);

      if(!user) {
        return res.status(404).json({
          errors: ['Não existe um usuário com o ID informado!']
        })
      }

      const dadosUser = await user.destroy();
      return res.json(dadosUser);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message)
      });
    }
  }
}

export default new UserController();
