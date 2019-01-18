console.log("[STARTUP] Modboi starting up...")

const discord = require('discord.js')
const bot = new discord.Client()
const mongoose = require('mongoose')
const prefix = "m;"
var isUbl;
console.log("[STARTUP] Connecting to database...")
setTimeout(() => {
  mongoose.connect(`mongodb+srv://Modboi_v2:${process.env.mdb_key}@modboi-v2-blqz3.gcp.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true })
}, 2000)
bot.commands = new Map()
bot.invite = "https://discordapp.com/api/oauth2/authorize?client_id=534527805736878099&permissions=8&redirect_uri=https%3A%2F%2Fbot.modboi.ml%2Fhome&scope=bot guilds"
bot.owner = "242734840829575169"
bot.userConfig = require('./models/user.js')

require('fs').readdir("./commands/", (err, files) => {
  if (err) return console.error("[ERROR] Commands failed to load.");
  
  files.filter(f => f.split(".").pop() === "js").forEach((f,i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
  })
})


bot.on('ready', () => {
  console.log("[READY] Modboi is ready for action!");
  bot.base = bot.guilds.get("442067917979385859");
  
  bot.user.setActivity("Loading Modboi...", {type: 'STREAMING', url: "https://twitch.tv/freakinghulk"})
  setTimeout(() => {
    bot.user.setActivity(`for ${prefix}help | ${bot.guilds.size} servers`, {type: "WATCHING"})
  }, 10000)
  
  bot.guilds.forEach((g,i) => {
    console.log(`[GUILD LISTINGS] Guild Name: ${g.name}   Guild ID: ${i}   Member Count: ${g.memberCount}\n`)
  })
})

bot.on('message', message => {
  const mArray = message.content.split(" ");
  const args = mArray.slice(1)
  const cmd_name = mArray[0].slice(prefix.length)
  const cmd = bot.commands.get(cmd_name)
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  
  bot.userConfig.findOne({userID: message.author.id}, (err,data) => {
     if (data) {
        if (data.isUBL) return isUbl = true;
     } else {
        const newData = new bot.userConfig({
          userID: message.author.id,
          username: message.author.username,
          money: 0,
          isUBL: false
        })
        
        newData.save().catch(err => console.error(`[ERROR] Data failed to save to database.\nError Message: ${err}`))
     }
  })
  
  if (cmd && !isUbl) {
     cmd.run(bot, message, args);
  }
})



bot.login(process.env.token)
