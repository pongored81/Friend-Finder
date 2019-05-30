client.on('message', message => {

  //Sets up arguments to be accepted despite syntax if one word
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  // requires prefix and the message to be from a user
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  else









})