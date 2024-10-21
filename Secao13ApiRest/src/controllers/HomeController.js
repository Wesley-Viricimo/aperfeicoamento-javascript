import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Wesley',
      sobrenome: 'Viricimo',
      email: 'wesley.viricimo.silva@outlook.com',
      idade: 27,
      peso: 76.3,
      altura: 1.91
    })
    res.json({
      novoAluno
    });
  }
}

export default new HomeController();
