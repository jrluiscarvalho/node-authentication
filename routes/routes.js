module.exports = {
    getUsuarios: function(req, res){
        res.json({message: "rota para GET do /usuarios"})
    },
    postUsuarios: require('../controller/user-controller'),
    login: require('../controller/login-controller'),
}