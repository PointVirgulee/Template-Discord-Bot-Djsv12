    const Discord = require('discord.js');

    module.exports.run = (client, message, args) => {

        const {
            prefix,
            color
        } = require('../config.json');


        let commands = client.commands;

        let obj = {
            fun: {
                name: "Commandes Fun:",
                cmds: []
            },
            utils: {
                name: "Commandes Utiles:",
                cmds: []
            },
            mod: {
                name: "Commandes De Modération:",
                cmds: []
            },
            autre: {
                name: "Autres Commandes:",
                cmds: []
            },
            owner: {
                name: "Créateur du Projet :",
                cmds: []
            }
            
        };
        for (let cmd of commands) {
            cmd = cmd[1];
            if (cmd.help && cmd.help.category) {
                switch (cmd.help.category) {
                    case "fun":
                        obj.fun.cmds.push(cmd);
                        break;
                    case "utils":
                        obj.utils.cmds.push(cmd);
                        break;
                    case "mod":
                        obj.mod.cmds.push(cmd);
                        break;
                    default:
                        obj.autre.cmds.push(cmd);
                        break;
                    case "owner":
                        obj.owner.cmds.push(cmd);
                        break;
                }
            }

        };

        const embed = new Discord.MessageEmbed()

            .setAuthor(`Help - ${message.author.tag}`, `${message.author.displayAvatarURL()}`, 'https://github.com/Slash-2548/Template-Discord-Bot-Djsv12')
            .setColor(color)
            .setDescription(`Nombre de commandes : \`${commands.size}\`\nLe préfix sur le serveur est : \`${prefix}\``)

        Object.keys(obj).forEach((k, i) => {
            let name = obj[k].name;
            let cmds = obj[k].cmds;
            let names = "";
            for (const cmd of cmds) {
                names = names + '`' + cmd.help.name + '`, ';
            }
            if (names.length !== 0) embed.addField(name, names, false);
        })

        message.channel.send(embed)

    }
    module.exports.help = {
        name: "help",
        category: "autre"
    }
