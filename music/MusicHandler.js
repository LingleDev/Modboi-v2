const ytdl = require('ytdl-core')
const snek = require('snekfetch')
const gConf = require('../models/guild')

class MusicHandler {
  constructor(guild) {
    this.guild = guild
    this.id = this.guild.id
    this.name = this.guild.name
  }
  
  
}
