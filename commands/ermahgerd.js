const ermahgerd = require('node-ermahgerd')

module.exports.help = {name: "ermahgerd"}

module.exports.run = (bot, message, args) => {
  const msg = args.join(" ");
  const translation = ermahgerd.translate(msg)
  const em = new (require('discord.js').RichEmbed)()
  .setTitle("Modboi v2 ERMAHGERD")
  .setDescription(`I translated your message!`)
  .addField("Translation:", translation, false)
  .setTimestamp()
  .setFooter("ERMAHGERD")
  .setColor("GREEN");
  message.channel.send({embed: em})
}
