module.exports = {
	name: 'test',
	description: 'Test for Basic Bot Funcitonality',
	execute(message, args) {
		console.log(client.guilds);
		message.channel.send('Success!');
	}
};
