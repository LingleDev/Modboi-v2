const mongoose = require('mongoose')

const info = mongoose.Schema({
  userID: String,
  username: String,
  cash: { type: Number, default: 0 },
  isBL: { type: Boolean, default: false }
})

module.exports = mongoose.model("userinfo", info)
