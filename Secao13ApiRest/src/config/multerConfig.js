import multer from "multer";
import { extname, resolve } from 'path';

const geraValorRandomico = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads')); //NO CALLBACK DEVE SER INFORMADO O QUE ACONTECERÁ EM CASO DE ERRO (NESTE CASO NADA ACONTECERÁ, POIS ESTÁ NULO) E A PASTA EM QUE OS ARQUIVOS SERÃO SALVOS (__dirname RETORNA A PASTA ATUAL, ..VOLTA UMA PASTA E NESTE CASO ESTÁ VOLTANDO DUAS PASTAS E APONTANDO PARA PASTA UPLOADS DA RAIZ)
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${geraValorRandomico()}${extname(file.originalname)}`);
    },
  })
};
