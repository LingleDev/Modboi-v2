const GSettings = require('../modules').GuildSettings

module.exports = (bot, guild, user) => {
  var c;
  var m;
  var r;
  
  GSettings.findOne({ guildId: guild.id }, (err,data) => {
    if (!data) {
      c = guild.channels.find(c => c.name == "modlog")
      m = "Username not available."
      r = "No reason provided."
    } else {
      if (guild.channels.find(c => c.id == data.modlog)) {
        c = guild.channels.get(data.modlog)
      } else {
        c = guild.channels.find(c => c.name == "modlog")
      }
      
      r = data.bans[user.id].reason
      m = guild.members.get(data.bans[user.id].moderator)
    }
  })
  
  const em = new embed()
  .setTitle("Modboi v2 ModLog Utility")
  .setDescription(`${user.username} just got banned from ${guild.name}.`)
  .addField("Moderator", `Username: ${m.displayName}\nUser ID: ${m.user.id}\n`, true)
  .addField("Reason", `${r}`, true)
  .setTimestamp()
  .setColor("RED")
  .setFooter("Ban Logger", user.avatarURL)
  c.send({embed: em})
}
