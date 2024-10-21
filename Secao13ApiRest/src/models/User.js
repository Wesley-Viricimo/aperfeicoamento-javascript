import Sequelize, { Model } from "sequelize";

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
        type: Sequelize.STRING,
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

    this.addHook('');

    return this;
  }
}
