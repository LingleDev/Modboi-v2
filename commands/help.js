const discord = require('discord.js')
const category_displaynames = ["⚒ Moderation", "🍭 Fun", "🤖 Bot", "🎵 Music"]
const categories = ["Moderation", "Fun", "Bot", "Music"]

module.exports.run = (bot, message, args) => {
  const msg = args.join(" ");
  
  for (const cmds in bot.commands) {
    console.log(cmds)
  }
  
  if (categories.includes(msg)) {
    const em = new discord.RichEmbed()
    .addField("Modboi v2 Help Menu", `Category: ${msg}\n`, true)
  } else {
    const cmd = bot.commands.get(msg)
    
    if (cmd) {
      const em = new discord.RichEmbed()
      .addField("Modboi v2 Help Menu", ``, true)
    }
  }
}

module.exports.help = {name: "help"}
