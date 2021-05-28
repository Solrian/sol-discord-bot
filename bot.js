const Discord = require('discord.js');
const fs = require('fs');

// develop
//const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
// master
const Dotenv = require('dotenv').config();
const config = {
	"token" : process.env.BOT_TOKEN,
	"GUILD_ID" : process.env.GUILD_ID,
	"CHANNEL_ID" : process.env.CHANNEL_ID
}

var client = new Discord.Client();

client.on('ready', () => {

	console.log(`Logged in as ${client.user.username}`);

    console.log("Servers:")

    client.guilds.cache.forEach((guild) =>
    {
        console.log(" - " + guild.name)
        console.log(" - " + guild.id)
    })

    console.log('I am ready!');
});

client.on('message', message => 
{
    if (message.author == client.user)
    {
        //bot soll nicht auf eigene Nachrichten reagieren
        return
    }

    if (message.guild.id !== config.GUILD_ID)
    {
        //bot soll nur auf Nachrichten auf einen spezifischen Server reagieren
        return
    }

    if (message.channel.id !== config.CHANNEL_ID)
    {
        //bot soll nur auf Nachrichten in einem spezfischen Channel reagieren
        return
    }

    if (message.content === 'ping') 
    {
        message.reply('pong');
    }
    else if (message.content === 'hallo') 
    {
        message.reply('hi');
    }
});

client.login(config.token);