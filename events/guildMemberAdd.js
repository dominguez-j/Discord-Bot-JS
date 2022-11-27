const config = require("../config.json")
module.exports = (client, member) => {  
    if(client.guilds.cache.get(config.server_id))
        member.roles.add(member.guild.roles.cache.get(config.role_id)); 
}       