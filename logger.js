const discord = require('discord.js');
let logchannel = "511281715894026261";

async function baselogger(bot, desc, icon) {
  let messages = await bot.channels.get(logchannel).fetchMessages({limit: 5});
  let log = messages.filter(m => m.author.id === bot.user.id &&
    m.embeds[0] &&
    m.embeds[0].type === 'rich' &&
    m.embeds[0].footer &&
    m.embeds[0].footer.text.startsWith('Case')
  ).first();
  var thisCase = 0
  var foot = ``
  if (log) {
    thisCase = /Case\s(\d+)/.exec(log.embeds[0].footer.text);
    foot = `Case ${parseInt(thisCase[1]) + 1}`
  } else {
    foot = `Case 1`
  }
  const thumburi = icon || ""
  let embed = new discord.RichEmbed()
    .setTimestamp()
    .setAuthor(`Modboi Logs`, bot.user.avatarURL)
    .setThumbnail(thumburi)
    .setColor("ff3333")
    .setDescription(desc)
    .setFooter(foot);
  
  bot.channels.get(logchannel).send({embed});
};

module.exports = {baselogger};
