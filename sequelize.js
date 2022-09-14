const Sequelize = require('sequelize')
const sequelize = new Sequelize('softex', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('conectado com sucesso!')
}).catch(function(erro){
    console.log('Falha ao se conectar: '+erro)
})