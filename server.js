const express = require('express') //Aqui estamos importando a biblioteca do express no projeto
const app = express() //Instancia da aplicação ativando a aplicação

app.get('/', function (req, res) { //métodos http para rodar o código js em backend
  res.json({message:'Hello Cypress Discovery'})
})

app.get('/avangers', function(req, res){
    var avangers = ['Tony Stark', 'Peter Parker', 'Nathasha Romanoff', 'Steve Rogers', 'Bruce Benner']
    return res.json({data: avangers})
})

app.get('/cnh', function(req, res){
    const idade = req.query.idade

    if (!idade) {
        return res.json({message: 'Idade é um campo obrigatório'})
        
    }

    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({message: 'Ok, você pode tirar a sua CNH.'})
    }else if (idadeNum > 4) {
        return res.json({message: 'Você não pode tirar a CNH, por enquanto sugiro andar de bike.'})
    } else {
        return res.json({message: 'Melhor você tomar leite...'})
    }

})

app.listen(3000)