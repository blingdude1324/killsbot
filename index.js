const tmi = require('tmi.js');
var formatDistance = require('date-fns/formatDistance')

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'killsfamchatbot',
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

	
});
