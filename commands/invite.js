module.exports.run = (bot, message, args) => {
  const inv = bot.invite
  
  const em = new (require('discord.js').RichEmbed)()
  .addField("Modboi v2 Invite", `Thanks for inviting me! [Here](${inv} "invite the bot")'s the invite.`, false)
  .setTimestamp()
  .setColor("GREEN");
  message.channel.send({embed: em})
}

module.exports.help = {name: "invite"}
