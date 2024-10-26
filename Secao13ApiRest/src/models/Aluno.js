import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) { //PASSADO COMO ARGUMENTO PARA O INIT A CONEXÃO COM SEQUELIZE (OBS: O NOME DA CONEXÃO DEVE SER SEQUELIZE)
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT
    }, {
      sequelize
    });
    return this;
  }
}
