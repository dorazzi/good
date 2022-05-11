var express = require("express");
var app = express();
var {usuario, empresa} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/usuarios", async function(req, res){
  var mostrar = await usuario.findAll();
  res.json(mostrar);
});

app.get("/usuarios:id", async function(req,res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});


app.post("/usuarios", function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/usuarios:id", async function(req, res){
var atualizar = await usuario.findByPk(req.params.id);
  res.send(atualizar.nome = "Ana");

  var resultadoSave = await atualizar.save();
  console.log(resultadoSave);
});

app.delete("/usuarios:id", async function (req,res){
  const deletar = await usuario.findByPk(req.params.id);
  deletar.destroy();
});

//
app.get("/empresas", async function(req, res){
  var mostrar = await empresa.findAll();
  res.json(mostrar);
});

app.get("/empresas:id", async function(req,res){
  var resultado = await empresa.findAll();
  res.json(resultado);
});


app.post("/empresas", function(req, res){
  var resultado = empresa.create(req.body);
  res.json(resultado);
});

app.put("/empresas:id", async function(req, res){
var atualizar = await empresa.findByPk(req.params.id);
  res.send(atualizar.nome = "Uf");

  var resultadoSave = await atualizar.save();
  console.log(resultadoSave);
});

app.delete("/empresas:id", async function (req,res){
  const deletar = await empresa.findByPk(req.params.id);
  deletar.destroy();
});

app.listen(3000, function(){
  console.log("O servidor está bruto demais");
});