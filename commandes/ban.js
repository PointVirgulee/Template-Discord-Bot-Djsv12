    const {
        MessageEmbed
    } = require('discord.js');

    module.exports.run = async (client, message, args) => {

        const {
            colorError,
            colorSucces
        } = require('../config.json');

        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            const notperm = new MessageEmbed()
                .setAuthor('Erreur')
                .setColor(colorError)
                .setDescription(`:x: Vous n'avez pas la permission de bannir des membres`)
            return message.channel.send(notperm);
        }

        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            const notpermbot = new MessageEmbed()
                .setAuthor('Erreur')
                .setColor(colorError)
                .setDescription(`:x: Vous ne m'avez pas accordé la permission de bannir des membres`)
            return message.channel.send(notpermbot);
        }

        if (message.mentions.users.size === 0) {
            const notmention = new MessageEmbed()
                .setAuthor('Erreur')
                .setColor(colorError)
                .setDescription(`:x: Vous n'avez pas mentionné de membre à bannir`)
            return message.channel.send(notmention);
        }

        const ban = message.guild.member(message.mentions.users.first());

        if (!ban) {
            const nottrv = new MessageEmbed()
            nottrv.setAuthor('Erreur')
            nottrv.setColor(colorError)
            nottrv.setDescription(`:x: Je n'ai pas trouvé l'utilisateur sur le serveur`)
            return message.channel.send(nottrv);
        }

        await ban.ban().then(member => {
            const ava = message.mentions.members.first();
            const banned = new MessageEmbed()
                .setAuthor(`Succès`)
                .setDescription(`${ava} a bien été banni par ${message.author}`)
                .setColor(colorSucces)
            return message.channel.send(banned)
        })
    }
    module.exports.help = {
        name: "ban",
        category: "mod"
    }
