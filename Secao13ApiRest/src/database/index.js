import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from '../models/Fotos';

const models = [Aluno, User, Foto];

const conexao = new Sequelize(databaseConfig);
models.forEach(model => model.init(conexao));
models.forEach(model => model.associate && model.associate(conexao.models));
