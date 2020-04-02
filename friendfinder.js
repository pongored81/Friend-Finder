// Import Nodes
const Discord = require('discord.js');
const fs = require("fs");


// Import config file
const config = require("./config.json");
const prefix = config.prefix;



// Create an instance of a Discord client
const client = new Discord.Client();

// ---> Command Handler START <---
// Initialize Map for commands
client.commands = new Discord.Collection();

// Filters Files for commands
const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

// loops through Commands folder for commands
for (const file of commandFiles) {
  const command = require(`./Commands/${file}`);
  client.commands.set(command.name, command);
};

// ---> Command Handler END <---

// ready event for bot start
client.on('ready', () => {
  console.log('I am ready!');
});

// ---> Message event START <---
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
});
// ---> Message event END <---
// ---> guildMemberAdd Event START <---
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, @${member}.`);
})
// ---> guildMemberAdd Event END <---

// Log our bot in using token
client.login(config.token);


//error handling
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));