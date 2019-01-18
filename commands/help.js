const discord = require('discord.js')
const category_displaynames = ["⚒ Moderation", "🍭 Fun", "🤖 Bot", "🎵 Music"]
const categories = ["Moderation", "Fun", "Bot", "Music"]

module.exports.run = (bot, message, args) => {
  const msg = args.join(" ");
  
  if (categories.includes(msg)) {
    var cmd;
    bot.commands.forEach((v,k) => {
      
    })
   } else {
    const cmd = bot.commands.get(msg)
    
    if (cmd) {
      const em = new discord.RichEmbed()
      .addField("Modboi v2 Help Menu", ``, true)
    }
  }
}

module.exports.help = {name: "help"}
