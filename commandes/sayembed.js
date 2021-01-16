const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const {
        color,
        colorError
    } = require('../config.json');


    const tosay = args.join(" ")

    if (!message.guild.member(message.author).hasPermission("MENTION_EVERYONE")) {
        const notperm = new Discord.MessageEmbed();
        notperm.setAuthor('Erreur')
        notperm.setColor(colorError)
        notperm.setDescription(`:x: Vous n'avez pas la permission de me faire parler`)
        return message.channel.send(notperm)
    }

    if (!tosay) {
        const notargs = new Discord.MessageEmbed();
        notargs.setAuthor('Erreur')
        notargs.setColor(colorError)
        notargs.setDescription(`:x: Vous n'avez pas précisé d'argument(s)`)
        return message.channel.send(notargs)
    }

    const embed = new Discord.MessageEmbed();
    embed.setColor(color)
    embed.setDescription(tosay)

    message.channel.send(embed);
}
module.exports.help = {
    name: "sayembed",
    category: "fun"
}
