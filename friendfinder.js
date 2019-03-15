// Import Nodes
const {Client, RichEmbed} = require('discord.js');
const fs = require("fs");
const got = require("got");

// Import ff-nodes

// Import config file
const config = require("./config.json");
const prefix = config.prefix;


// Create an instance of a Discord client
const client = new Client();


// ready event for bot start
client.on('ready', () => {
  console.log('I am ready!');
});


//required message response variables and constants
var delaybean1 = 0;


// Create an event listener for messages
client.on('message', message => {

  //Sets up arguments to be accepted despite syntax if one word
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  // requires prefix and the message to be from a user
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  else


    // User commands
    switch (command) {
      case 'ghost':
        message.channel.send('BOoOoooOOOoo!:ghost:');
        break;
      case 'schmeat':
        message.channel.send('Give \'em the schmeat!:eggplant:')
        break;
      case 'beanjuice':
        var delaybean0 = message.createdTimestamp;
        if (args[0] == null) {
          args[0] = 1;
        } else
        if (args[0] > 5) {
          args[0] = 5;
        }
        if ((delaybean1 + 300000) > delaybean0) {
          message.channel.send('You must wait five minutes from creation of the last good bean juice')
        } else {
          delaybean1 = delaybean0;
          while (args[0] > 0) {
            message.channel.send(':coffee:')
            args[0]--;
          }
        }
        break;
        case 'random':
        if (args[0] == 'cat'){
          (async () => {
            const res = await got("http://aws.random.cat/meow", {json: true});
            const file = res.body.file;
            const embed = new RichEmbed()
            .setTitle('Kitty Time')
            .setColor(0x00a8f3)
            .setImage(file)
            message.channel.send(embed);
          })();} else if (args[0] == 'dog'){
            (async () => {
              const res = await got("https://random.dog/woof.json", {json: true});
              const file = res.body.url;
              const embed = new RichEmbed()
              .setTitle('Puppy Time')
              .setColor(0x00a8f3)
              .setImage(file)
              message.channel.send(embed);
          })();} else {
            message.channel.send('You must select either dog or cat as the first argument');
          }

          break;

        // Animals
      case 'cat':
        message.channel.send('Meow!:cat:')
        break;
      case 'dog':
        message.channel.send('Boof!:dog:')
        break;
      case 'bird':
        message.channel.send('Tweet!:bird:')
        break;
      case 'lizard':
        message.channel.send('....:lizard:')
        break;


        // tools
      case 'roll':
        let min = args[0];
        let max = args[1];
        if (min == null || max == null) {
          message.channel.send('You must select a minimum and maximum number in the form of !roll min max')
        } else {
          let rnd = Math.random();
          let dif = (max - min);
          let roll = Math.floor(rnd * dif + 1 * min) + 1;
          message.channel.send(roll)
          //          message.channel.send(roll);
        }
        break;

        /*        //Queue
              case 'queue':
                let game =
        */default:
message.channel.send(" Commands can be found at https://sqksq.theplayground123.net/FriendFinder ");
}


// Owner commands
//if (message.author.id != config.ownerID) return;
//else switch (command) {}




});
// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(config.token);


//error handling

client.on('error', console.error);
