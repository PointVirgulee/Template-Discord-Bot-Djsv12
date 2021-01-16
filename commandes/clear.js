    const Discord = require('discord.js');

    module.exports.run = async (client, message, args) => {

        const {
            colorError,
            colorSucces
        } = require('../config.json');


        if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) {
            const notpermm = new Discord.MessageEmbed()
            notpermm.setAuthor('Erreur')
            notpermm.setColor(colorError)
            notpermm.setDescription(`:x: Vous n'avez pas la permission de supprimer des messages`)
            return message.channel.send(notpermm)
        }

        if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
            const paperm = new Discord.MessageEmbed()
            paperm.setAuthor('Erreur')
            paperm.setColor(colorError)
            paperm.setDescription(`:x: Vous ne m'avez pas accordé la permission de supprimer des messages`)
            return message.channel.send(paperm)
        }

        if (!args[0]) {
            const msgsupp = new Discord.MessageEmbed()
            msgsupp.setAuthor('Erreur')
            msgsupp.setColor(colorError)
            msgsupp.setDescription(`:x: Vous n'avez pas indiqué le nombre de message(s) à supprimer`)
            return message.channel.send(msgsupp)
        }

        if (isNaN(args[0])) {
            const msglettre = new Discord.MessageEmbed()
            msglettre.setAuthor('Erreur')
            msglettre.setColor(colorError)
            msglettre.setDescription(`:x: Vous n'avez pas indiqué une valeur acceptable`)
            return message.channel.send(msglettre)
        }

        if (args[0] > 100 || args[0] < 1) {
            const msglimit = new Discord.MessageEmbed()
            msglimit.setAuthor('Erreur')
            msglimit.setColor(colorError)
            msglimit.setDescription(`:x: Je n'ai pas la chance de supprimer plus de 100 messages (ou moins que 1)`)
            return message.channel.send(msglimit)
        }

        await message.channel.bulkDelete(args[0]);

        const embeded = new Discord.MessageEmbed()
        embeded.setAuthor(`Succès`)
        embeded.setDescription(`${args[0]} Message(s) ont été supprimé(s)`)
        embeded.setFooter(`Par : ${message.author.tag}`)
        embeded.setColor(colorSucces)
        message.channel.send(embeded)
    }
    module.exports.help = {
        name: "clear",
        category: "mod"
    }
