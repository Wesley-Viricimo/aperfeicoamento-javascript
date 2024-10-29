import multer from "multer";
import multerConfig from "../config/multerConfig";

import Foto from '../models/Fotos';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => { //MÉTODO UPLOAD É RESPONSÁVEL POR TRATAR O UPLOAD DAS IMAGENS
      if(err) { //SE DER ERRO NO UPLOAD SERÁ DISPARADA UMA MENSAGEM COM O ERRO (NESTE CASO DARÁ ERRO SE O ARQUIVO NÃO FOR IMAGEM CONFORME CONFIGURADO NO ARQUIVO MULTERCONFIG)
        return res.status(400).json({
          errors: [err.code]
        });
      }

      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;

      const foto = await Foto.create({ originalname, filename, aluno_id });

      return res.json(foto);
    });
  }
}

export default new FotoController();
