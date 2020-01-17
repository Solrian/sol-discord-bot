const Dotenv = require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => 
{
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