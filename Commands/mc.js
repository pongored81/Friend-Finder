module.exports = {
	name: 'mc',
	description: 'settings for minectaft',
	execute(message, args) {
// prepped Files
var json = require('./Data/mc.json');
parsedJSON = JSON.parse(json);

    switch(args){
// Gives ip to user through DM
      case ip:
      if (parsedJSON.some(message.author) == true){
        message.author.send('This is where the IP for the server would go');
      }
      else {
        message.author.send('Your request for server access has been sent to the server moderators')
      }
      break;

    }
	},
};



/*
Request access to server -> sends message to admin/mods for acceptance ->
Y/N -> Send reply to Mods and Admins for name to Whitelist -> send info to
Requestee for Server join
*/
