module.exports.help = {name: "roleinfo"}

module.exports.run = (bot, message, args) => {
  const role = message.mentions.roles.first();
  if (!role) return message.channel.send("You must mention a role.");
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Invalid permissions!");
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("I can't do that... Make sure I have the Manage Roles permission.");
  
  const em = new (require('discord.js').RichEmbed)()
}
