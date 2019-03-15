module.exports.run = (bot, message, args) => {
  const inv = bot.invite
  
  const em = new (require('discord.js').RichEmbed)()
  .setTitle("Modboi v2 Invite")
  .setDescription(`I can't use invite links! [Here](${inv} "invite the bot")'s my invite link!`)
  .setTimestamp()
  .setColor("GREEN");
  message.channel.send({embed: em})
}

module.exports.help = {name: "invite"}
