const embed = new (require('discord.js').RichEmbed)()

module.exports.run = (bot, message, args) => {
  const channel = message.mentions.channels.first();
  var topic = args.slice(1).join(" ");
  if (!channel) return message.channel.send(`You must mention a channel.`);
  if (!topic) topic = null; 
  
  embed
  .setTitle("Modboi v2 Topic Set")
  .setTimestamp()
  .setColor("GREEN")
  
  if (topic !== null) {
    channel.setTopic(topic);
    embed.setDescription(`<#${channel.id}>'s topic has been set to ${topic}.`)
  } else {
    channel.setTopic("");
    embed.setDescription(`<#${channel.id}>'s topic has been reset.`)
  }
  message.channel.send({embed: embed})
}

module.exports.help = {name: "settopic"}
