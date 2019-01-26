module.exports.run = (bot, message, args) => {
  const money = Math.ceil(Math.random() * 300)
  
  bot.userConfig.findOne({userID: message.author.id}, (err,data) => {
    if (!data) {
      const newData = new bot.userConfig({
        userID: message.author.id,
        username: message.author.username,
        cash: money,
        isBL: false
      })
      
      newData.save().catch(err => console.error("[ERROR] Database failed to save. Error Message:\n"+err+"\n"))
      const em = new (require('discord.js').RichEmbed)()
      .setTitle(`Modboi v2 Work`)
      .setDescription("You got a job at a local business, and got paid.")
      .addField(`Earned Coins:`, `${money}`, true)
      .addField(`Current Balance:`, `${money}`, true)
      .setTimestamp()
      .setColor("GREEN")
      message.channel.send({embed: em})
    } else {
      data.cash = data.cash+money
      data.save().catch(err => console.error("[ERROR] Database failed to save. Error Message:\n"+err+"\n"))
      const em = new (require('discord.js').RichEmbed)()
      .setTitle("Modboi v2 Work")
      .setDescription("You worked at the office today, and got paid.")
      .addField(`Earned Coins:`, `${money}`, true)
      .addField(`Current Balance:`, `${data.cash}`, true)
      .setTimestamp()
      .setColor("GREEN")
      message.channel.send({embed: em})
    }
  })
}

module.exports.help = {name: "work"}
