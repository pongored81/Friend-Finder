var delaybean1 = 0;

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

    //fun commands
    //random command
  case 'random':
    message.channel.send('Getting ready....');
    if (args[0] == 'cat') {
      (async () => {
        const res = await got("http://aws.random.cat/meow", {
          json: true
        });
        const file = res.body.file;
        const embed = new RichEmbed()
          .setTitle('Kitty Time!')
          .setColor(0x00a8f3)
          .setImage(file)
        message.channel.send(embed);
      })();
    } else if (args[0] == 'dog') {
      (async () => {
        const res = await got("https://random.dog/woof.json", {
          json: true
        });
        const file = res.body.url;
        const embed = new RichEmbed()
          .setTitle('Puppy Time!')
          .setColor(0x00a8f3)
          .setImage(file)
        message.channel.send(embed);
      })();
    } else {
      message.channel.send('You must select either dog or cat as the first argument');
    }
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
      message.channel.send('**' + roll + '**')
    }
    break;

    //Queue
  case 'q':
    var action = args[0];
    var game = args[1];
    switch (action) {
      case 'show':
        fs.readFile('./queue/lol.json', (err, data) => {
          if (err) throw err;
          var json = JSON.parse(data);
          const embed = new RichEmbed()
            .setTitle('League of Legends')
            .setColor(0x00a8f3)
            .addField('In Queue', json.username)
          message.channel.send(embed);
        });
        break;
      case 'add':
        fs.readFile('./queue/lol.json', (err, data) => {
          if (err) throw err;
          var json = JSON.parse(data);
          var check = false;
          for (i = 0; i < 5; i++) {
            if ((json.username[i] == '-' && check == false) || json.username[i] == message.member.user.username) {
              json.username[i] = message.member.user.username;
              check = true;
            }
          }
          json = JSON.stringify(json, null, 1);;
          fs.writeFile('./queue/lol.json', json, (err) => {
            if (err) throw err;
            message.channel.send(message.member.user.username + ' has been added to the queue');
          });
        });
        break;
      case 'clear':
        fs.readFile('./queue/lol.json', (err, data) => {
          if (err) throw err;
          var json = JSON.parse(data);
          json.clear = message.createdTimestamp;
          for (i = 0; i < 5; i++) {
            json.username[i] = '-';
            json.time[i] = '-';
          }
          json = JSON.stringify(json, null, 1);;
          fs.writeFile('./queue/lol.json', json, (err) => {
            if (err) throw err;
            console.log('The file has been reset!');
          });
        });
        break;
    }
    break;



  case 'help':
    message.channel.send(" Commands can be found at https://sqksq.xyz/FriendFinder ");
    break;

  default:
}