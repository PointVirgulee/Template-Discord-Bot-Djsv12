const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args, color, colorerror, colorsucces) => {

let notpermm = new Discord.MessageEmbed();
notpermm.setAuthor('Erreur')
notpermm.setColor(colorerror)
notpermm.setDescription(`:x: Vous n'avez pas la permission de supprimer des messages`)



if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(notpermm);

let paperm = new Discord.MessageEmbed();

    paperm.setAuthor('Erreur')
    paperm.setColor(colorerror)
    paperm.setDescription(`:x: Vous ne m'avez pas accordé la permission de supprimer des messages`)


if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send(paperm);

let msgsupp = new Discord.MessageEmbed();

    msgsupp.setAuthor('Erreur')
    msgsupp.setColor(colorerror)
    msgsupp.setDescription(`:x: Vous n'avez pas indiqué le nombre de message(s) à supprimer`)


if(!args[0]) return message.channel.send(msgsupp);

let msglettre = new Discord.MessageEmbed();

    msglettre.setAuthor('Erreur')
    msglettre.setColor(colorerror)
    msglettre.setDescription(`:x: Vous n'avez pas indiqué une valeur acceptable`)


if(isNaN(args[0])) return message.channel.send(msglettre);

let msglimit = new Discord.MessageEmbed();

    msglimit.setAuthor('Erreur')
    msglimit.setColor(colorerror)
    msglimit.setDescription(`:x: Je n'ai pas la chance de supprimer plus de 100 messages (ou moins que 1)`)

if(args[0] > 100 ||args[0] < 1) return message.channel.send(msglimit);

message.channel.bulkDelete(args[0]);


let embeded = new Discord.MessageEmbed()
embeded.setAuthor(`Succès`)
embeded.setDescription(`${args[0]} Message(s) ont été supprimé(s)`)
embeded.setFooter(`Par : ${message.author.tag}`)
embeded.setColor(colorsucces)

message.channel.send(embeded);

}
module.exports.help = {
name: "clear"
}