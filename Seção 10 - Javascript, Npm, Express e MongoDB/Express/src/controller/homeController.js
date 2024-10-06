exports.paginaInicial = (req, res, next) => {
    res.render('index');
}

exports.trataPost = (req, res, next) => {
    res.send('Nova rota de POST');
};