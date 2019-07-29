module.exports = {
	name: 'mc',
	description: 'settings for minecraft',
	execute(message, args) {
// prep Files
var file = './Data/mc.json';
var json = require(file);
parsedJSON = JSON.parse(json);

    switch(args[0]){
// ===========================================================
// Gives ip to user through DM --> IP <--
      case "ip":
			case "join":
	      if (parsedJSON.some(message.author) == true) {
	        message.author.send(`This is where the IP for the server would go, ${parsedJSON.Ip}`);
	      }
	      else {
					const user = message.author;
					const tag = message.author.get(user).tag;

// Loop Through moderators sending them the request message
					let modLength = parsedJSON.Moderator.length;
					for (var i = 0; i < modLength; i++) {
						let modUser = parsedJSON.Request[i];
						modUser.send(`@${tag} has requested access to the Minecraft server`);
					}
	        message.author.send('Your request for server access has been sent to the server moderators')
	      }
	      break;
// --> IP <-- END
// ===========================================================
// --> Add Mod <-- START
			case "makemod":
				if (parsedJSON.Admin.some(message.author) == true && guild.available == true) {
					let modLength = parsedJSON.Moderator.length ++;
					if (args[1].length == 18) {
					parsedJSON.Moderator[modLength] = args[1];
					let json = JSON.stringify(parsedJSON);
					fs.writeFile(file);
					} else {
						message.channel.send('The user ID you have entered is incorrect in length');
					}
				}
				else {
					message.channel.send('You do not have access to this command, sorry :grimmacing:');
				}
				break;
// --> Add Mod <-- END
// ===========================================================
// --> Add User <-- START
// --> Add User <-- END
// ===========================================================
// --> Whitelist <-- START
// --> Whitelist <-- END
// ===========================================================
// --> Help <-- START
			case "help":
			case "?":
				message.channel.send(`list of current commands can be found at sqksq,xyz/Minecraft`)
				break;
// --> Help <-- END
// ===========================================================
// -->  <-- START
// -->  <-- END
// ===========================================================
// -->  <-- START
// -->  <-- END
// ===========================================================
// -->  <-- START
// -->  <-- END
// ===========================================================
// -->  <-- START
// -->  <-- END
// ===========================================================
// --> Default <-- START
			default:
// --> Default <-- END
// ===========================================================

    }
	}
};



/*
Request access to server -> sends message to admin/mods for acceptance ->
Y/N -> Send reply to Mods and Admins for name to Whitelist -> send info to
Requestee for Server join
*/
