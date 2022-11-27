const fs = require("fs");
module.exports = (client) => {
  try{
    const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
    for (const file of eventFiles) {
      try{
        const event = require(`../events/${file}`);
        const eventName = file.split(".")[0];
        console.log(`Evento Cargado: ${eventName}`)
        client.on(eventName, event.bind(null, client));
      }catch(e){
        console.log(e);
      }    
    }
  }catch(e){
    console.log(e);
  }
};
