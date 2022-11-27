const fs = require("fs");
module.exports = (client) => {
  try {
    fs.readdirSync("./commands/").forEach((dir) => {
      const commands = fs.readdirSync(`./commands/${dir}`).filter((file) => file.endsWith(".js"));  
      for (let file of commands) {
        let cmd = require(`../commands/${dir}/${file}`);
        if (cmd.name) {
          console.log(`Comando Cargado: ${cmd.name}`);
          client.commands.set(cmd.name, cmd);
        } else {
          console.log(`Error: ${file}`);
        }
        if(cmd.aliases && Array.isArray(cmd.aliases)) cmd.aliases.forEach((alias) => client.aliases.set(alias, cmd.name));
      }
    });
  }catch(e){
      console.log(e)
  }
};