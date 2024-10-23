import User from '../models/User';
import jwt from 'jsonwebtoken';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if(!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas!']
      });
    }

    const user = await User.findOne({ where: { email } }) //BUSCA UM USUÁRIO ONDE O EMAIL É IGUAL AO EMAIL INFORMADO

    if(!user) {
      return res.status(404).json({
        errors: ['Usuário não cadastrado no sistema!']
      });
    }

    if(!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Usuário ou senha inválidos!']
      })
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, { //PARA GERAR O TOKEN É NECESSÁRIO PASSAR UM PAYLOAD (INFORMAÇÕES DO USUÁRIO AUTENTICADO QUE PODERÃO SER RECUPERADOS ATRAVÉS DO TOKEN), UM SECRET E O TEMPO DE EXPIRAÇÃO DESTE TOKEN;
      expiresIn: process.env.TOKEN_EXPIRATION
    });

    res.json({ id, email, token});
  }
}

export default new TokenController();
