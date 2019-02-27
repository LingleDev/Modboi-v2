module.exports.help = {name: "roles"}
const api = new (require('pastebin-js'))(process.env.pb_key)
module.exports.run = (bot, message, args) => {
  const roles = message.guild.roles
  var link;
  
  roles.forEach((r,i) => {
    api.createPaste(`Role ID: ${i} Role Name: ${r.name}\n`, `Roles for ${message.guild.name}` ).then(d => {
      link = d
    })
  })
  
  const em = new (require('discord.js').RichEmbed)()
  .addField("Modboi v2 Role Mapper", "I got a list of the roles in this guild.")
  .addField("Pastebin Link", `I posted the roles to Pastebin, so it wouldn't take up space in this chat. You can find the paste [here](${d} "Check out this paste.").`)
  .setTimestamp()
  .setColor("GREEN")
  message.channel.send({embed: em})
}
