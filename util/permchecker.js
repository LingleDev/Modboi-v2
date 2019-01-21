class PermChecker {
  constructor(member) {
    this.member = member
  }
  
  CheckforPerms(pArray) {
    if (typeof pArray !== "array") return console.error("The parameter for the CheckforPerms function must be an Array!");
  
    return this.member.hasPermission(pArray)
  }
  
  ListPermissions() {
    return ["ADMINISTRATOR", "KICK_MEMBERS", "BAN_MEMBERS", "CREATE_INSTANT_INVITE", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"]     
  }
}
