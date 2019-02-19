module.exports.run = (bot, message, args) => {
	if (message.member.hasPermission("MANAGE_MESSAGES")) {
  if (isNaN(args[0])) {
    return message.channel.send('Please give me a number!').then(m => m.delete(2000))
  }

  var am = args[0]
  message.channel.send(":exclamation: Beginning to purge " + am + " messages... :exclamation:").then(m => m.delete(2500))

  setTimeout(() => {
    message.channel.bulkDelete(am)
    .then(() => {
        message.channel.send("Done! Purged " + am + " messages!").then(m => m.delete(2000))
    })
    .catch(err => message.channel.send("I couldn't purge those messages.").then(m => m.delete(2000)))
  }, 1000);
} else {
	message.channel.send("Invalid permissions!").then(m => m.delete(2000))
	}
}

module.exports.help = {
  name: "purge",
  usage: `[amount]`,
  information: "Remove x amount of messages"
}
