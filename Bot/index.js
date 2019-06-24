const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', ()  =>{
    //console.log('I am ready!');
    client.user.setStatus("Online");
    client.user.setActivity("")
});

client.on('message', message => {


});
client.login(process.env.BOT_TOKEN);
