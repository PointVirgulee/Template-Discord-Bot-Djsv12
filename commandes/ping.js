const Discord = require('discord.js')

module.exports.run = async(client, message, args, color) => {

  let pingEmbed = new Discord.MessageEmbed()
  pingEmbed.setDescription(`:robot: **Ping en cours...**`)
  pingEmbed.setColor(color)

  const m = await message.channel.send(pingEmbed);
  let ping = m.createdTimestamp - message.createdTimestamp;
  
  let pongEmbed = new Discord.MessageEmbed()
  pongEmbed.setDescription(`:robot: La latence du bot est de **${ping}ms**`)
  pongEmbed.setColor(color)

  m.edit(pongEmbed);
}
            
module.exports.help = {
    name: "ping"
  }
  