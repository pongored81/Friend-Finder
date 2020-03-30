module.exports = {
  name: 'quit',
  description: 'kills the bot',
  execute(message, args) {
    message.channel.send('Bye!');
    process.exit();

  }
};
