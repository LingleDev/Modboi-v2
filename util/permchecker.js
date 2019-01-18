class PermChecker {
  constructor(member) {
    this.member = member
  }
  
  CheckforPerms(pArray) {
    if (typeof pArray !== "array") return console.error("The parameter for the CheckforPerms function must be an Array!");
  
    return this.member.hasPermission(pArray)
  }
  
  ListPermissions() {
    return [""]
  }
}
