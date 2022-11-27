args = 0;
const {PermissionsBitField} = require('discord.js');
module.exports ={
    name: 'clear',
    aliases: ["cls"],
    run: async (client, message, args) => {
      if(message.member.permissions.has(PermissionsBitField.Flags.ManageMessages)){
        if(args == 0){
          message.channel.bulkDelete(5, true)
        }           
        if(args > 0 && args<=15){
          message.channel.bulkDelete(parseInt(args,10)+1, true)
        }        
        if(args > 15)
          message.reply("El maximo es de 15 pelele")  
      }   
    if(!message.member.permissions.has(PermissionsBitField.Flags.ManageMessages))
      {
        message.reply("No tenes permiso para eso d0wn");
      }
}
};