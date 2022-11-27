const fetch = require('node-fetch')
const parseString = require('xml2js').parseString;
module.exports = {
  name: 'rule34',
  aliases: ['r34'],
  cooldown: 30,
  guildOnly: false,
  ownerOnly: false,
  nsfw: true,
	run: async (client, message, args) => {
  const url = 'https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags='+args.join(" ");
  try {
    const response = await fetch(url)
    apiData = await response.text()
    parseString(apiData, function (error, result) {
      let postCount = result.posts.$.count - 1;
      if(postCount > 100) 
        postCount = 100;
      if(postCount > 0) {
        var picNum = Math.floor(Math.random() * postCount) + 0;
        var r34Pic = result.posts.post[picNum].$.file_url;
        message.channel.send({
          files: [r34Pic]
        });
      } else
        message.channel.send("Pone un tag q exista pajín");
    })
  } catch (e) {
    console.log(e)
    message.channel.send("Hubo un error con la rule")
  }
}}