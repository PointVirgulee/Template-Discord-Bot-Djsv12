const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({disableEveryone: true,});
client.commands = new Discord.Collection();
const config = require('./config.json');

    fs.readdir("./commandes/", (error, f) => {
     if(error) console.log(error);
     let Commandes = f.filter(f => f.split(".").pop() === "js");
     if(Commandes.length <= 0) return console.log("Aucune commande trouvé !");
     Commandes.forEach((f) => {let commande = require(`./commandes/${f}`);
     console.log(`${f} commande chargée !`);
     client.commands.set(commande.help.name, commande);});});

    fs.readdir("./events/", (error, f) => {
     if(error) console.log(error);
     console.log(`${f.length} events en chargement`);
     f.forEach((f) => {const events = require(`./events/${f}`);
     const event = f.split(".")[0];
     client.on(event, events.bind(null, client));});});

     client.login(config.token);