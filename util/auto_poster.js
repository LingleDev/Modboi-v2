const snekfetch = require('snekfetch')

module.exports = async (bot) => {
  const dtok = process.env.db_auth
  
  function postStats() {
    snekfetch.post('https://discordbots.org/api/bots/stats')
    .set("Authorization", dtok)
    .send({ server_count: bot.guilds.size })
    .then(r => {
      Promise.resolve("Updated server count.")
    })
    .catch(err => {
      Promise.reject("Encountered an error while posting server count.")
    })
  }
  
  bot.on('guildCreate', () => {
    postStats()
    .then(console.log)
    .catch(console.error)
  })
  
  setInterval(() => {
    postStats()
    .then(console.log)
    .catch(console.error)
  }, 600000)
}
