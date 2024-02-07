const express = require ("express");
const app = express ( );
const port = 3000;


app.use(express.static("public"));

app.post("/", (req,res)=>{
    res.render("index.html");
})


app.post("/usuarios", (req,res)=>{
    res.send("Este es el END POINT para la creacion de NUEVOS USUARIOS");
})

app.post("/productos", (req,res)=>{
    res.send("Este es el END POINT para la creacion de NUEVOS PRODUCTOS");
})

app.get("/listaProductos", (req,res)=>{
    res.send("Este es el END POINT para LISTAR los NUEVOS PRODUCTOS");
})
   

app.listen(port, ( ) => {
console.log (`Server runnig in port : ${port}`)})
