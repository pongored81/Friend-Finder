module.exports = {
	name: 'test',
	description: 'Test for Basic Bot Funcitonality',
	execute(message, args) {
		message.channel.send('Success!');
	},
};
