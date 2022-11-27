const Discord = require("discord.js")
const {Client, GatewayIntentBits, Collection} = require("discord.js")
require('dotenv').config();
const client = new Client({
    restTimeOffset: 0,
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageTyping
      ]
})

client.commands = new Collection()
client.aliases = new Collection()
client.events = new Collection()
client.config = require("./config.json")

function handler(){
    ["commandHandler", "eventHandler", "distube"].filter(Boolean).forEach(handler => {
        try{
            require(`./handlers/${handler}`)(client,Discord);
        } catch(e){
            console.log(e);
        }     
      });
}
handler();  

require('./handlers/distube.js')(client)

client.login(process.env.TOKEN)