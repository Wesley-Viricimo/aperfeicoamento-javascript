import multer from "multer";
import multerConfig from "../config/multerConfig";

const upload = multer(multerConfig).single('foto');

class FotoController {
  async store(req, res) {
    return upload(req, res, (err) => { //MÉTODO UPLOAD É RESPONSÁVEL POR TRATAR O UPLOAD DAS IMAGENS
      if(err) { //SE DER ERRO NO UPLOAD SERÁ DISPARADA UMA MENSAGEM COM O ERRO (NESTE CASO DARÁ ERRO SE O ARQUIVO NÃO FOR IMAGEM CONFORME CONFIGURADO NO ARQUIVO MULTERCONFIG)
        return res.status(400).json({
          errors: [err.code]
        });
      }

      return res.json(req.file);
    });
  }
}

export default new FotoController();
