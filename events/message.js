    const Discord = require("discord.js");

    module.exports = async (client, message) => {

        const {
            prefix
        } = require('../config.json');


        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commande = args.shift();
        const cmd = client.commands.get(commande);

        if (!cmd) return;
        message.delete();

        cmd.run(client, message, args);
    };
