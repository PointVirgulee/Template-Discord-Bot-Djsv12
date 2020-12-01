const Discord = require("discord.js");
const prefix = require('../config.json');
const config = require('../config.json');
let color = require('../config.json');
let colorerror = require('../config.json');
let colorsucces = require('../config.json');

module.exports = async(client, message) => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;


    if(!message.content.startsWith(config.prefix)) return;

    let color = config.color
    let colorerror = config.colorerror
    let colorsucces = config.colorsucces


    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const commande = args.shift();
    const cmd = client.commands.get(commande);
    if(!cmd) return;

    message.delete();

    cmd.run(client, message, args, color, colorerror, colorsucces);
};
