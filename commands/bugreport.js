const pbAPI = require('pastebin-js')
const api = new pbAPI(process.env.pb_key)
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const msg = args.join(" ");
  
  message.channel.send("I sent a bug report to FHGDev.");
  
  api.createPaste(msg, `[Modboi] Bug report from ${message.author.username}`).then(d => {
     const embed = new discord.RichEmbed()
     .setTitle("Modboi Bug Report")
     .setDescription(`${message.author.username} just submitted a bug report on pastebin. Check it out [here](https://pastebin.com/${data}).`)
     .setColor("RANDOM")
     .setFooter("Modboi Bug Reports")
     .setTimestamp()
     
     bot.channels.get("534720291289432104").send({embed: embed})
  })
}

module.exports.help = {name: "bugreport"}
