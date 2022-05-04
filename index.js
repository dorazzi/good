var express = require("express");
var app = express();
var {usuario} = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var mostrar = await usuario.findAll();
  res.json(mostrar);
});

app.get("/:id", async function(req,res){
  var resultado = await usuario.findAll();
  res.json(resultado);
});


app.post("/", function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.put("/:id", async function(req, res){
var atualizar = await usuario.findByPk(req.params.id);
  res.send(atualizar.nome = "Ana");

  var resultadoSave = await atualizar.save();
  console.log(resultadoSave);
});

app.delete("/:id", async function (req,res){
  const deletar = await usuario.findByPk(req.params.id);
  deletar.destroy();
});

app.listen(3000, function(){
  console.log("O servidor está bruto demais");
});