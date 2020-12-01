const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args, color, colorerror, colorsucces) => {

let notperm = new Discord.MessageEmbed();
notperm.setAuthor('Erreur')
notperm.setColor(colorerror)
notperm.setDescription(`:x: Vous n'avez pas la permission d'expulser un membre`)

if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(notperm);

let notpermbot = new Discord.MessageEmbed();
notpermbot.setAuthor('Erreur')
notpermbot.setColor(colorerror)
notpermbot.setDescription(`:x: Vous ne m'avez pas accordé la permission d'expulser des membres`)

if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(notpermbot);

if(message.mentions.users.size === 0) {

let notmention = new Discord.MessageEmbed();
notmention.setAuthor('Erreur')
notmention.setColor(colorerror)
notmention.setDescription(`:x: Vous n'avez pas mentionné de membre à expulser`)

return message.channel.send(notmention);
}

let kick = message.guild.member(message.mentions.users.first());
if(!kick) {
let nottrv = new Discord.MessageEmbed();
nottrv.setAuthor('Erreur')
nottrv.setColor(colorerror)
nottrv.setDescription(`:x: Je n'ai pas trouvé l'utilisateur sur le serveur`)
return message.channel.send(nottrv);
}

let ava = message.mentions.members.first();
await kick.kick().then(member =>{

const kicked = new Discord.MessageEmbed()
kicked.setAuthor(`Succès`)
kicked.setColor(colorsucces) 
kicked.setDescription(`${ava} a bien été expulsé du serveur par ${message.author}`)

message.channel.send(kicked);
});
};

module.exports.help = {
    name: "kick"
}