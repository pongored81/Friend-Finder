module.exports = {
  name: 'mc',
  description: 'settings for minecraft',
  execute(message, args) {
    // prep Files
    const file = '../Data/mc.json';
    const parsedJSON = require(file);
    //parsedJSON = JSON.parse(json);

    switch (args[0]) {
      // ===========================================================
      // --> IP <-- START
      // Gives ip to user
      case "ip":
      case "name":
        message.channel.send(`This is where the IP for the server would go, ${parsedJSON.Ip}`);
        break;
        // --> IP <-- END
        // ===========================================================
        // --> Join <-- START
        // Sends a request to mods for a user to join the server
      case "join":
        if (parsedJSON.some(message.author) == true) {
          message.channel.send(`You are already a member of this server`);
        } else {
          const user = message.author;
          const tag = message.author.get(user).tag;
          let modLength = parsedJSON.Moderator.length;
          for (var i = 0; i < modLength; i++) {
            let modUser = parsedJSON.Request[i];
            modUser.send(`@${tag} has requested access to the Minecraft server`);
          }
          message.channel.send('Your request for server access has been sent to the server moderators')
        }
        break;
        // --> Join <-- END
        // ===========================================================
        // --> Add Mod <-- START
      case "addMod":
        if (parsedJSON.Admin.some(message.author) == true) {
          let modLength = parsedJSON.Moderator.length++;
          if (args[1].length == 18) {
            parsedJSON.Moderator[modLength] = args[1];
            let json = JSON.stringify(parsedJSON);
            fs.writeFile(file);
          } else {
            message.channel.send('The user ID you have entered is incorrect in length');
          }
        } else {
          message.channel.send('You do not have access to this command, sorry :grimmacing:');
        }
        break;
        // --> Add Mod <-- END
        // ===========================================================
        // --> Add User <-- START
      case "addUser":
        if (parsedJSON.Moderator.some(message.author) == true) {
          let userLength = parsedJSON.User.length++;
          if (args[1].length == 18) {
            parsedJSON.User[modLength] = args[1];
            let json = JSON.stringify(parsedJSON);
            fs.writeFile(file);
          } else {
            message.channel.send('The user ID you have entered is incorrect in length');
          }
        } else {
          message.channel.send('You do not have access to this command, sorry :grimmacing:');
        }
        break;
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
        // --> Test <-- START
      case "test":
        message.channel.send(parsedJSON.Ip);

        break;
        // --> Test <-- END
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