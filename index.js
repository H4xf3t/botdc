const mySecret = process.env['TOKEN'] 
const express = require('express');
const app = express(); 
const port = 3000;
app.get("/", function (request, response) {
response.sendFile(__dirname + '/page.html');});
app.listen(port, () => console.log(`bot is online`));
const Discord = require('discord.js');
const client = new Discord.Client(); 

client.on('ready', () => {
console.log(`logged in as ${client.user.tag}!`);
client.user.setPresence( {
  
activity: {name: `https://hyexshop.vercel.app`, // Nombre del estado
type: "PLAYING"}, // Tipo (LISTENING, WATCHING, PLAYING). 
status:"online"});})
client.setMaxListeners (200) 

client.on("message", (message) => {
     if(message.content.startsWith("ea")) {  // Comando
     message.channel.send( "" ) 
   }
 
 });

client.on("message", (message) => {
   if(message.content.startsWith("ip?")) {  // Comando
     message.channel.send("mira esto: holymc.club") // Respuesta
   }
 
 });

 client.on("message", (message) => {
   if(message.content.startsWith("ozuna")) {  // Comando
     message.channel.send("esta: holymc.club") // Respuesta
   }
 
 });

 client.on("message", (message) => {
   if(message.content.startsWith("pasen la ip")) {  // Comando
     message.channel.send("ozuna ip: holymc.club") // Respuesta
   }
 
 });

  client.on("message", (message) => {
   if(message.content.startsWith("manden la ip")) {  // Comando
     message.channel.send("esta xdxd es la ip: holymc.club") 
   }
 
 });

 client.on("message", (message) => {
   if(message.content.startsWith("ip")) {  // Comando
     message.channel.send("la ip es: holymc.club") // Respuesta
   }
 
 });

 client.on("message", (message) => {
   if(message.content.startsWith("cual es la ip")) {  // Comando
     message.channel.send("mira esta: holymc.club") // Respuesta
   }

    });

     client.on("message", (message) => {
   if(message.content.startsWith("IP?")) {  // Comando
     message.channel.send("esta: holymc.club") // Respuesta
   }
 
 });

 client.on("message", (message) => {
   if(message.content.startsWith("CUAL ES LA IP?")) {  // Comando
     message.channel.send("ip: holymc.club") 
   }

    });

  
    client.on("message", (message) => {
   if(message.content.startsWith("diganme la ip")) {  // Comando
     message.channel.send("ip: holymc.club") // Respuesta
   }

    });

      client.on("message", (message) => {
   if(message.content.startsWith("como entro?")) {  // Comando
     message.channel.send("con las manos: holymc.club") 
   }

    });

      client.on("message", (message) => {
   if(message.content.startsWith("podrian decirme la ip?")) {  
     message.channel.send("no: holymc.club") // Respuesta
   }

    });

    client.on("message", (message) => {
 if(message.content.startsWith("!version")) {  
   message.channel.send("1.21") // Respuesta
 }

  });

client.login(process.env.TOKEN); // Candado