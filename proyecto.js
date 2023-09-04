const express = require('express');
const path = require('path');
const app = express();
const port = 1000



app.use('/assets',express.static(path.join(__dirname,'assets')));




app.get('/',(req, res)=> {
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.get('/index1',(req, res)=> {
  res.sendFile(path.join(__dirname, '/index1.html'));
});

app.post('/index',(req, res)=> {
  var nombre = req.query.nombre;
  var celular = req.query.celular;
  var email = req.query.email;
  console.log(nombre);
  console.log(celular);
  console.log(email);

  if (nombre == "javier" && celular == "2352444796" && email == "j.a.g.13@hotmail.com") {
    res.send({"estado":"correcto"});
  } else {
    res.send({"estado":"incorrecto"});
  }
});


app.listen(port, () => { 
  console.log(`example app listeningon port ${port}`)
});
