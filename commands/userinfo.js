const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    const member = message.mentions.members.first()
    const user = member.user

    const em = new discord.RichEmbed()
    .addField(`${user.username}'s Info`, `This is the info I found for ${user.username}!`)
    .addField(`User ID:`, `${user.id}`)
    .addField(`Username:`, `${user.username}`)
    .addField(`Nickname:`, `${member.displayName}`)
    .addField(`Status:`, `${member.presence.status}`)
    .setTimestamp()
    .setFooter(`Requested by ${message.author.username}`)
    .setColor("RANDOM")
    message.channel.send({embed: em})
}

module.exports.help = {
    name: "userinfo"
}
