module.exports = {
  name: 'alt+f4',
  description: 'kicks the user that types the command',
  execute(message, args) {
    const user = message.author;
    user.kick();
    message.channel.send(`Success! You are now gone! Farewell @${user}`);
  }
};