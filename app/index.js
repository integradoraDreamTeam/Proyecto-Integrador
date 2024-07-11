//Meter el dirmane
import path from 'path';
import {fileURLToPath} from 'url';
const _dirname = path.dirname(fileURLToPath(import.meta.url));

import express from 'express';

//Crear el servidor
const server=express();
server.set("port",4000);
server.listen(server.get("port"));

// Rutas
server.get("/main",(req,res)=> res.sendFile(_dirname + "/pages/mainpre.html"))
server.get("/sUp",(req,res)=> res.sendFile(_dirname + "/pages/registroUsuario.html"))

//Configuracion
server.use(express.static(_dirname+"/public"))
