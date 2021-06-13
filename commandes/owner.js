//Cette commande a été créée pour promouvoir mon travail.
//Vous avez la possibilité de la supprimer, comme de la laisser.
//Pour plus d'informations cercenant la template,
//Voici mon Discord : Point;Virgule#2548.


const Discord = require('discord.js');

module.exports.run = (client, message, args) => {


    const {
        color
    } = require('../config.json');

    const embed = new Discord.MessageEmbed();
    embed.setAuthor('Project Owner')
    embed.setThumbnail('https://zupimages.net/up/21/02/kf4n.png')
    embed.setColor(color)
    embed.addField('Pseudo :', `Point;Virgule`, true)
    embed.addField('Tag :', '#2548', true)
    embed.addField('ID :', '423155238082576394', true)
    embed.addField('Réseaux :', 'Github : https://github.com/PointVirgulee\nTwitter : https://twitter.com/slash2548\nPaypal : https://paypal.me/rideproject', false)
    embed.addField('Projet Perso :', 'Ride Support : https://discord.gg/W2yH7qE5sF\nRide Bot : https://discord.com/oauth2/authorize?client_id=714238332888023041&permissions=-1&scope=bot', false)
    embed.setFooter('Créé et distribué par Point;Virgule#2548')

    message.channel.send(embed);

}

module.exports.help = {
    name: "owner",
    category: "owner"
}
