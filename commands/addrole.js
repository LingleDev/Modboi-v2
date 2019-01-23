module.exports.run = (bot, message, args) => {
  const member = message.mentions.members.first();
  const role = message.mentions.roles.first();
  const name = role.name
  
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`Invalid permissions!`);
  if (!message.guild.me.hasPermission()) return message.channel.send(`I can't do that. Make sure I have the Manage Roles permission.`);
  
  member.addRole(role)
  .then(m => {
    const em = new (require('discord.js').RichEmbed)()
    .addField("Modboi v2 Role System", `I gave ${m.displayName} the role ${name}.`)
    .setTimestamp()
    .setColor("GREEN")
    message.channel.send({embed: em})  
  })
  
  .catch(err => {
    message.channel.send(`I couldn't add the role to ${member.displayName}...`)
    bot.log(bot, `[ERROR] Role add failed in ${message.guild.name}.\nError Message: ${err}`, message.guild.iconURL)
    console.error(`[ERROR] Role add failed in ${message.guild.name}.\nError Message: ${err}`)
  })
  
}

module.exports.help = {
  name: "addrole"
}
