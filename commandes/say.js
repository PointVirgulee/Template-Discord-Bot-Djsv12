const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(client, message, args, color, colorerror) => {


    const tosay = args.join(" ")

	let notperm = new Discord.MessageEmbed();
	notperm.setAuthor('Erreur')
	notperm.setColor(colorerror)
	notperm.setDescription(`:x: Vous n'avez pas la permission de me faire parler`)

    if(!message.guild.member(message.author).hasPermission("MENTION_EVERYONE")) return message.channel.send(notperm);
   
    let notargs = new Discord.MessageEmbed();
    notargs.setAuthor('Erreur')
    notargs.setColor(colorerror)
    notargs.setDescription(`:x: Vous n'avez pas précisé d'argument(s)`)

    

if(!tosay){
      return message.channel.send(notargs)
}

    message.channel.send(tosay);
}
    module.exports.help = {
    name: "say"
}