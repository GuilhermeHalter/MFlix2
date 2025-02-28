var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/login', function(req, res, next){
  const email = req.body.email;
  const senha = req.body.senha;

  // buscar pelo Email e Senha no BD
  // se for usuario valido, redirecionar para tela de perfis
  // caso contrario, redirecionar para tela de login.

  
})

module.exports = router;
