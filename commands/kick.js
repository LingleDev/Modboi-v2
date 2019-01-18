const discord = require('discord.js') 

module.exports.run = (bot, message, args) => {
  const member = message.mentions.members.first();
  if (!member) return message.channel.send("Please mention a member.");
  const reason = args.slice(1).join(" ") || null
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Invalid permissions!");
  if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send("I can't kick people. Make sure I have the Kick Members permission.");
  if (!member.kickable) return message.channel.send(`${member.displayName} is not kickable.`);
  
  member.kick(reason)
  .then(m => {
    const em = new discord.RichEmbed()
    .setTitle("Modboi Kick System")
    .setDescription(`👢 ${m.user.username} is outta here!`)
    .setTimestamp()
    .setFooter(`${m.user.username} was kicked by ${message.member.displayName}.`)
    .setColor("GREEN")
    message.channel.send({embed: em})
  })
  .catch(err => {
    message.channel.send(`I couldn't kick ${member.displayName}...`)
    bot.log(bot, `[ERROR] Kick failed in ${member.guild.name}.\nError Message: ${err}`, message.guild.iconURL)
    console.error(`[ERROR] Kick Failed in ${member.guild.name}.\nError Message: ${err}`)
  })
 
}

module.exports.help = {name: "kick"}
