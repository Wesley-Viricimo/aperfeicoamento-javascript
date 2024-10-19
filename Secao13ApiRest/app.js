import express from 'express';
import homeRoutes from './src/routes/homeRoute'

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
  }
}

export default new App().app;
