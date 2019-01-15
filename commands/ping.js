module.exports.run = (bot, message, args) => {
  const ping = Math.floor(bot.ping)
  
  const em = new (require('discord.js').RichEmbed)()
  .setTitle("Modboi v2 Ping")
  .setDescription(`PONG! My ping is ${ping}ms!`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
  .setColor("GREEN")
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "ping"
}
