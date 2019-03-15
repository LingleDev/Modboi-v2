const guild = require(`../modules`).GuildSettings

module.exports.run = (bot, message, args) => {
  const channel = message.mentions.channels.first();
  
  if (!channel) return message.channel.send(`You must mention a channel to set.`);
  
  guild.findOne({ guildId: message.guild.id }, (err, data) => {
    if (!data) {
      const newData = new guild({
        guildId: message.guild.id,
        guildName: message.guild.name,
        premium: false,
        blacklist: false,
        modlog: channel.id,
        welcome: null,
        warns: {},
        bans: {}
      })
      
      newData.save()
      .then(() => {
        const em = new embed()
        .setTitle(`Modboi v2 ModLog Settings`)
        .setDescription(`${channel.name} has been set as ${message.guild.name}'s mod log.`)
        .setTimestamp()
        .setColor("GREEN")
        message.channel.send({embed: em})
      })
      .catch(e => {
        console.error(bot.errors.dbSaveError.replace("%s", e))
        const em = new embed()
        .setTitle("Modboi v2 ModLog Settings")
        .setDescription("I encountered an error while changing the settings! Please submit a bug report with `m;bugreport`.")
        .setTimestamp()
        .setColor("RED")
        message.channel.send({embed: em})
      })
    } else {
      
      data.modlog = channel.id
      data.save()
      .then(() => {
        const em = new embed()
        .setTitle(`Modboi v2 ModLog Settings`)
        .setDescription(`${channel.name} has been set as ${message.guild.name}'s mod log.`)
        .setTimestamp()
        .setColor("GREEN")
        message.channel.send({embed: em})
      })
      .catch(e => {
        console.error(bot.errors.dbSaveError.replace("%s", e))
        const em = new embed()
        .setTitle("Modboi v2 ModLog Settings")
        .setDescription("I encountered an error while changing the settings! Please submit a bug report with `m;bugreport`.")
        .setTimestamp()
        .setColor("RED")
        message.channel.send({embed: em})
      })
    }
  })
}

module.exports.help = {name: "setmodlog"} 
