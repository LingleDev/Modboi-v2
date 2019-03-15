const MusicHandler = require('../modules').Music


module.exports.run = (bot, message, args) => {
  let Music = new MusicHandler({ member: message.member })
  
  
}

module.exports.help = {name: "play"}
