const discord = require('discord.js')
const category_displaynames = ["⚒ Moderation", "🍭 Fun", "🤖 Bot", "📜 Role Management", "🎵 Music"]
const cat_com = {
  moderation: [
    "ban",
    "kick", 
    "purge", 
    "softban",
    "tempban",
    "hackban",
    "purge"
  ],
  role_mgmt: [
    "addrole",
    "delrole",
    "roleinfo",
    "roleids"
  ],
  fun: [
    "8ball",
    "meme",
    "chuck_norris",
    "yo_momma"
  ],
  bot: [
    "ping",
    "uptime",
    "bugreport",
    "setstatus (owner only!)",
    "shutdown (owner only!)",
    "restart (owner only!)",
    
  ],
  
  music: [
    "play",
    "stop",
    "clear"
  ]
}
const categories = ["Moderation", "Fun", "Bot", "Role Management", "Music"]

module.exports.run = (bot, message, args) => {
  const msg = args.join(" ");
  
  if (categories.includes(msg) || categories.includes(msg.toLowerCase())) {
    if (msg == categories[0]) {
      const em = new discord.RichEmbed()
      .addField(`Modboi v2 Help`, `This is a list of my commands in the category ${category_displaynames[0]}.`)
      .addField(`Commands`, `**${cat_com.moderation.join("\n")}**`, true)
      .setFooter("PLEASE NOTE THAT NOT ALL OF THE COMMANDS LISTED ARE COMPLETE.")
      .setTimestamp()
      .setColor("RANDOM")
      message.channel.send({embed: em})
    }
    
    if (msg == categories[1]) {
      const em = new discord.RichEmbed()
      .addField(`Modboi v2 Help`, `This is a list of my commands in the category ${category_displaynames[1]}.`)
      .addField(`Commands`, `**${cat_com.fun.join("\n")}**`, true)
      .setFooter("PLEASE NOTE THAT NOT ALL OF THE COMMANDS LISTED ARE COMPLETE.")
      .setTimestamp()
      .setColor("RANDOM")
      message.channel.send({embed: em})
    }
    
    if (msg == categories[2]) {
      const em = new discord.RichEmbed()
      .addField(`Modboi v2 Help`, `This is a list of my commands in the category ${category_displaynames[2]}`)
      .addField(`Commands`, `**${cat_com.bot.join("\n")}**`, true)
      .setFooter("PLEASE NOTE THAT NOT ALL OF THE COMMANDS LISTED ARE COMPLETE.")
      .setTimestamp()
      .setColor("RANDOM")
      message.channel.send({embed: em})
    }
    
    if (msg == categories[3]) {
      const em = new discord.RichEmbed()
      .addField(`Modboi v2 Help`, `This is a list of my commands in the category ${category_displaynames[3]}`)
      .addField(`Commands`, `**${cat_com.role_mgmt.join("\n")}**`, true)
      .setFooter("PLEASE NOTE THAT NOT ALL OF THE COMMANDS LISTED ARE COMPLETE.")
      .setTimestamp()
      .setColor("RANDOM")
      message.channel.send({embed: em})
    }
    
    if (msg == categories[4]) {
      const em = new discord.RichEmbed()
      .addField(`Modboi v2 Help`, `This is a list of my commands in the category ${category_displaynames[4]}`)
      .addField(`Commands`, `**${cat_com.music.join("\n")}**`, true)
      .setFooter("PLEASE NOTE THAT NOT ALL OF THE COMMANDS LISTED ARE COMPLETE.")
      .setTimestamp()
      .setColor("RANDOM")
      message.channel.send({embed: em})
    }
  }
}

module.exports.help = {name: "help"}
