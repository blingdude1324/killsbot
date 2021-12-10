const tmi = require('tmi.js');
var formatDistance = require('date-fns/formatDistance')

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'JCoNetChloe',
		password: process.env.pass
	},
	channels: [ "jconet" ]
});

client.connect().then(console.log("Chat Bot Active"));

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

    if(tags['username'] === "streamlabs") return;

    let command = message.toLowerCase();

	if (command === "!wet") {
		let min = Math.ceil(0);
		let max = Math.floor(100);
		let percentage = Math.floor(Math.random() * (max - min + 1)) + min;
		client.say(channel, `${tags.username}, you are ${percentage}% wet!`);
	}
});