const ytdl = require('ytdl-core')
const { get } = require('snekfetch')
const gConf = require('../models/guild')
const apikey = process.env.yt_key

/**
* @param {Object} obj An Object containing a GuildMember. (Message#member)
* @example const Music = new MusicHandler({ member: message.member });
*/

module.exports = class MusicHandler {
  constructor(obj) {
    if (!obj) return console.error("You must pass an Object containing a member when constructing MusicHandler. Example: new MusicHandler({ member: GuildMember })");  
   
    for (const [key,value] of Object.entries(obj)) {
      this[key] = value
    }
    
    this.queue = null;
  }
  
  play(id, queue) {
    this.queue = queue
    var stream;
    
    if (this.isURL(id)) {
      stream = ytdl(id, { filter: "audioonly" })
    } else {
      stream = ytdl(`https://youtube.com/watch?v=${id}`, { filter: "audioonly" })
    }
    
    let vc = this.member.voiceChannel
    let dispatcher = vc.playStream(stream)
    
    return dispatcher;
  }
  
  stop() {
    var vc = this.member.voiceChannel
    
    if (vc) return vc.leave();
    
    this.queue.forEach(entry => {
      this.queue.pop(entry)  
    })
    
    return [vc,this.queue]
  }
  
  skip() {
    
    this.queue.shift()
    play(this.queue[0], this.queue)
    
  }
  
  search(q) {
    if (!this.isYT(q) || !this.isURL(q)) {
      get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=${encodeURIComponent(q)}&key=${apikey}`)
      .then(r => {
        const json = JSON.parse(r.body)
        
        if (json.items) {
          return json.items[0].id.videoId
        }
      })
      .catch(console.error)
    }
  }
  
  isYT(str) {
    return str.toLowerCase().trim().indexOf("youtube.com") > -1;
  }
  
  isURL(str) {
    return str.startsWith("https://") || str.toLowerCase().includes(".com") || str.startsWith("http://") || this.isYT(str)
  }
}
