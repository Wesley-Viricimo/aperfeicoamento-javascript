import multer from "multer";
import { extname, resolve } from 'path';

const geraValorRandomico = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, callback) => { //CONFIGURAÇÃO PARA FILTRAR OS ARQUIVOS
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') { //SE O ARQUIVO NÃO FOR DOS TIPOS JPEG OU JPG
      return callback(new multer.MulterError('Arquivo precisa ser PGN ou JPG!')); //CHAMADA DO ERRO NO CALLBACK
    }

    return callback(null, true); //SE O ARQUIVO PASSAR NA VALIDAÇÃO INDICANDO QUE É UMA IMAGEM, SETAR NULO PARA O ERRO E TRUE PARA CONTINUAR A EXECUÇÃO
  },
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, resolve(__dirname, '..', '..', 'uploads', 'images')); //NO CALLBACK DEVE SER INFORMADO O QUE ACONTECERÁ EM CASO DE ERRO (NESTE CASO NADA ACONTECERÁ, POIS ESTÁ NULO) E A PASTA EM QUE OS ARQUIVOS SERÃO SALVOS (__dirname RETORNA A PASTA ATUAL, ..VOLTA UMA PASTA E NESTE CASO ESTÁ VOLTANDO DUAS PASTAS E APONTANDO PARA PASTA UPLOADS DA RAIZ)
    },
    filename: (req, file, callback) => {
      callback(null, `${Date.now()}_${geraValorRandomico()}${extname(file.originalname)}`);
    },
  })
};
