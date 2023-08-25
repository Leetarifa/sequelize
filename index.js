const express = require("express")
const app = express()
const Sequelize = require("sequelize")
const sequelize = new Sequelize("projetoweb", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function () {
    console.log("Conexão realizada com sucesso")
}).catch(function (erro) {
    console.log("Falha ao conectar" + erro)
})
const Agendamentos = sequelize.define("agendamentos", {

    nome: {

        type: Sequelize.STRING

    },

    endereço: {

        type: Sequelize.STRING

    },

    bairro: {

        type: Sequelize.STRING

    },

    cep: {

        type: Sequelize.INTEGER

    },

    cidade: {

        type: Sequelize.STRING

    },

    estado: {

        type: Sequelize.STRING

    },

    observacao: {

        type: Sequelize.TEXT

    },

})

//Agendamentos.sync({force: true})



//Agendamentos.create({

//   nome: "Lee",

//  endereco: "Cachoeirinha",

//  bairro: "Penha Brasil",

//   cep: "2882100",

//  cidade: "Sao Paulo",

//   estado: "SP",

//  observacao: "Realizar serviço de manutenção automotiva na próxim sexta-feira",

//})



app.get("/", function (req, res) {

    res.send("Tela inicial")

})



app.get("/cadastrar/:nome", function (req, res) {

    Agendamentos.create({

        nome: req.params.nome

    })

    res.redirect("/")

})
app.listen(8081, function () {

    console.log("Servidor web carregando!")
})