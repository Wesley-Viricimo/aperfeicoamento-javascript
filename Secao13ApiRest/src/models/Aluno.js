import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) { //PASSADO COMO ARGUMENTO PARA O INIT A CONEXÃO COM SEQUELIZE (OBS: O NOME DA CONEXÃO DEVE SER SEQUELIZE)
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.'
          }
        }
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: true,
        validate: {
          isEmail: {
            msg: 'E-mail inválido!'
          }
        }
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro!'
          }
        }
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Valor inválido para o peso!'
          }
        }
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Valor inválido para a altura!'
          }
        }
      }
    }, {
      sequelize
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Fotos, { foreignKey: 'aluno_id' });
  }
}
