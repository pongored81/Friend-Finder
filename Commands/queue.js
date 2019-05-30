case 'q':
        var action = args[0];
		var time = args[1];
        var game = args[2];
        switch (action) {
          case 'show':
            fs.readFile('./queue/lol.json', (err, data) => {
              if (err) throw err;
              var json = JSON.parse(data);
              const embed = new RichEmbed()
                .setTitle('In Queue')
                .setColor(0x00a8f3)
                .addField('Users', json.user)
              message.channel.send(embed);
            });
            break;
          case 'add':
            fs.readFile('./queue/lol.json', (err, data) => {
              if (err) throw err;
              var json = JSON.parse(data);
              var check = false;
              for (i = 0; i < 12; i++) {
                if ((json.username[i] == '-' && check == false) || json.username[i] == message.member.user.username) {
                  json.user[i] = message.member.user.username;
				  json.game[i] = game;
				  
					

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
			default:
				fs.readFile('./queue/lol.json', (err, data) => {
				  if (err) throw err;
				  var json = JSON.parse(data);
				  const embed = new RichEmbed()
					.setTitle('In Queue')
					.setColor(0x00a8f3)
					.addField('Users', json.user)
				message.channel.send(embed);
				});
            break;
		}
	break;
	
	
function qRefresh(){
	
}