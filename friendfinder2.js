// Import Nodes
const {
  Client,
  RichEmbed
} = require('discord.js');
const fs = require("fs");
const got = require("got");

// Import ff-nodes
const stl = require("streamtools.js")

// Import config file
const config = require("./config.json");
const prefix = config.prefix;

// Create an instance of a Discord client
const client = new Client();

// ready event for bot start
client.on('ready', () => {
  console.log('I am ready!');
});