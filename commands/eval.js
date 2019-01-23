const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  if (message.author.id == bot.owner) {
    const content = message.content.split(' ').slice(1).join(' ');
  const result = new Promise((resolve, reject) => resolve(eval(content)));

  return result.then(output => {
    if (typeof output !== 'string') output = require('util').inspect(output, { depth: 0 });
    if (output.includes(bot.token)) output = output.replace(bot.token, 'Not for your eyes');
    
    const em = new Discord.RichEmbed()
    .addField("Eval returned:\n```"+output+"```")
    .setTimestamp()
    .setColor("GREEN")
    .setFooter("Eval")

    return message.channel.send({embed: em}).then(m => m.delete(5000))
  }).catch(err => {
    console.error(err);
    err = err.toString();

    if (err.includes(bot.token)) err = err.replace(bot.token, 'Not for your eyes');

    const em = new discord.RichEmbed()
    .addField("Eval returned:\n```"+err+"```")
    .setTimestamp()
    .setColor("RED")
    .setFooter("Eval")
  
    return message.channel.send({embed: em})
  });  
  } else {
    message.channel.send("Invalid permissions!")
  }
  }

module.exports.help = {
  name: "eval"
}
