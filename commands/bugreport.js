const pbAPI = require('pastebin-js')
const api = new pbAPI(process.env.pb_key)
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const msg = args.join(" ");
  
  message.channel.send("I sent a bug report to FHGDev.");
  
  api.createPaste(msg, `[Modboi] Bug report from ${message.author.username}`).then(d => {
     const embed = new discord.RichEmbed()
     .setTitle("Modboi Bug Report")
     .setDescription(`${message.author.username} just submitted a bug report on pastebin. Check it out [here](${d}).`)
     .setColor("RANDOM")
     .setFooter("Modboi Bug Reports")
     .setTimestamp()
     
    bot.users.get('242734840829575169').send({embed: embed})
  })
  .catch(console.error)
}

module.exports.help = {name: "bugreport"}
