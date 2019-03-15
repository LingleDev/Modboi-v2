const mongoose = require('mongoose')

const schema = mongoose.Schema({
  guildId: String,
  guildName: String,
  premium: { type: Boolean, default: false },
  blacklist: { type: Boolean, default: false },
  modlog: { type: String, default: 0 },
  welcome: { type: String, default: 0 },
  warns: { type: Object, default: {} }
})

module.exports = mongoose.model("gConf", schema)
