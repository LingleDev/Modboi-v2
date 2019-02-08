module.exports.help = {name: "roleinfo"}

module.exports.run = (bot, message, args) => {
  const role = message.mentions.roles.first();
  if (!role) return message.channel.send("You must mention a role.");
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Invalid permissions!");
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I can't do that... Make sure I have the Manage Roles permission.");
  
  const n = role.name
  const i = role.id
  const hoisted = role.hoist
  const canBeEdited = role.editable
  const mentioned = role.mentionable
  const hex = role.hexColor
  
  
  const em = new (require('discord.js').RichEmbed)()
  .addField("Modboi v2 Role Info:", "Here's the requested info!",true)
  .addField("Role Name:", n,true)
  .addField("Role ID:", i,true)
  .addField("Role Hoist:", hoisted,true)
  .addField("Role Editable:", canBeEdited,true)
  .addField("Role Mentionable:", mentioned, true)
  .addField("Role Color Hex:", hex, true)
  .setTimestamp()
  .setFooter("Requested by %s".replace("%s", message.member.displayName))
  .setColor("GREEN")
  message.channel.send({embed: em})
}
