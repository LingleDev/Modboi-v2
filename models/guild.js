const mongoose = require('mongoose')

const schema = mongoose.Schema({
  guildId: String,
  guildName: String,
  premium: { type: Boolean, default: false },
  blacklist: { type: Boolean, default: false }
})

module.exports = mongoose.model("gConf", schema)
