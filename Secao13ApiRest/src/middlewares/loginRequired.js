import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers; //OBTENDO O HEADER DE NOME AUTHORIZATION

  if(!authorization) { //SE O TOKEN ESTIVER NO HEADER DA REQUISIÇÃO SERÁ RETORNADO UM ERRO INFORMANDO QUE O LOGIN É REQUERIDO
    return res.status(401).json({
      errors: ['Login required']
    });
  }

  try {
    const dados = jwt.verify(authorization, process.env.TOKEN_SECRET); //SE O TOKEN EXISTIR, VERIFICO SE O SECRET DO TOKEN É IGUAL AO SECRET SALVO
    const { id, email } = dados; //OBTENDO O ID E O EMAIL DO USUÁRIO SALVOS NO PAYLOAD DO TOKEN

    const user = await User.findOne({ //BUSCANDO USUÁRIO COM USUÁRIOS E EMAIL SALVOS NO PAYLOAD DO TOKEN
      where: {
        id,
        email
      }
    });

    if(!user) { //SE USUÁRIO NÃO EXISTIR, SIGNIFICA QUE O USUÁRIO ALTEROU SUAS INFORMAÇÕES E NESTE CASO NÃO PODERÁ PROSSEGUIR COM AS REQUISIÇÕES
      return res.status(401).json({
        errors: ['Usuário inválido!']
      });
    }

    req.userId = id; //PASSANDO O ID E EMAIL DO USUÁRIO PARA A REQUISIÇÃO
    req.userEmail = email;
    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido!']
    })
  }
}
