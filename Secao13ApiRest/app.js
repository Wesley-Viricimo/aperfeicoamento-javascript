import dotenv from 'dotenv';
dotenv.config();

import './src/database'

import express from 'express';
import homeRoutes from './src/routes/homeRoute';
import userRoutes from './src/routes/userRoute';

class App {
  constructor() { //NA INSTÂNCIA DA CLASSE, O EXPRESS, MIDLLEWARES E ROUTES SERÃO CHAMADOS
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;