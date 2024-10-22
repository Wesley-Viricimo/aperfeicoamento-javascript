import Sequelize, { Model } from "sequelize";
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) { //PASSADO COMO ARGUMENTO PARA O INIT A CONEXÃO COM SEQUELIZE (OBS: O NOME DA CONEXÃO DEVE SER SEQUELIZE)
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255], //INFORMANDO QUE O CAMPO NOME CONTERÁ DE 3 A 255 CARACTERES NO BANCO DE DADOS
            msg: 'Campo nome deve conter de 3 a 255 caracteres'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe'
        },
        validate: {
          isEmail: {
            msg: 'Email inválido!'
          }
        }
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      password: {
        type: Sequelize.VIRTUAL, //TIPO VIRTUAL INDICA QUE O CAMPO NÃO SERÁ SALVO NO BANCO DE DADOS
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50], //INFORMANDO QUE O CAMPO NOME CONTERÁ DE 6 A 50 CARACTERES NO BANCO DE DADOS
            msg: 'A senha precisa ter entre 6 e 50 caracteres'
          }
        }
      },
    }, {
      sequelize
    });

    this.addHook('beforeSave', async user => { //ADICIONANDO HOOK PARA QUE ANTES DE SALVAR, PEGAR A SENHA DO USUÁRIO E ENCRIPTAR USANDO BCRYPT E ATRIBUIR AO CAMPO PASSWORD HASH (OBS: O 8 INFORMADO COMO ARGUMENTO É O SALT, MAS QUANTO MAIOR FOR O VALOR INFORMADO, MAIS PROCESSAMENTO SERÁ CONSUMIDO DURANTE A ENCRIPTAÇÃO)
      if(user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }
}
