module.exports.run = (bot, message, args) => {
  const money = Math.ceil(Math.random() * 290)
  
  bot.userConfig.findOne({userID: message.author.id}, (err,data) => {
    
  })
}

module.exports.help = {name: "work"}
