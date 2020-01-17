const Dotenv = require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {

	console.log("Servers:")

	client.guilds.forEach((guild) =>
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

	if (message.guild.id !== process.env.GUILD_ID)
	{
		//bot soll nur auf Nachrichten auf einen spezifischen Server reagieren
		return
	}

	if (message.channel.id !== process.env.CHANNEL_ID)
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

client.login(process.env.BOT_TOKEN);