var model = require('../model/model')
, jwt = require('jwt-simple')
, segredo = 'jngdfnsagposfidjasdiofjasodifjsadoifjasdofn';

module.exports = function(req, res, next){
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    console.log(token);
    if(token){
        try{
            var decoded = jwt.decode(token, segredo);
            console.log('decodando '+decoded);

            if(decoded.exp <= Date.now()){
                res.json(400, {error: 'acesso expirado, faça o login novamente'});
            }

            model.findOne({_id: decoded.iss}, function(err, user){
                if(err){
                    res.status(500).json({message:"erro ao procurar usuario do token."});
                }
                req.user = user;
                console.log('achei o usuario '+req.user)
                return next();
            });
        } catch(err){
           return res.status(401).json({message: 'Erro:Seu token é invalido'});
        }
    }else{
        res.json(401, {message: 'Token não encontrado ou informado'});
    };
};