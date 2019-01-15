const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const em = new discord.RichEmbed()
  .setTitle("Modboi v2 Info")
  .setDescription(` Hi! I'm Modboi v2! I was created by FHGDev because of a critical, unpatchable bug in Modboi v1. To see my commands, run m;help. `)
  .setFooter(`Command run by ${message.author.username}`)
  .setTimestamp()
  .setColor("GREEN")
  
  message.channel.send({embed: em})
}

module.exports.help = {name: "info"}
