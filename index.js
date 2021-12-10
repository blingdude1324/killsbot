const tmi = require('tmi.js');
var formatDistance = require('date-fns/formatDistance')
const fs = require('fs');

const rp = require('request-promise');
const { get } = require('request');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.username,
		password: process.env.pass
	},
	channels: [ process.env.channel ]
});

client.connect().then(
	console.log(`Chatbot online`)
);


const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command);
}

const prefix = process.env.prefix;

client.on('message', async (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

    if(tags['username'] === "streamlabs") return;

	let messageArray = message.split(" ");
  	let commandName = messageArray[0].slice(prefix.length).toLowerCase();
  	let args = messageArray.slice(1);

	if (message.startsWith(prefix)) {
		let command = commands.find(cmd => cmd.name === commandName);
    	if (!command) return;
	
		try {
		  command.execute(client, tmi, formatDistance, fs, channel, tags, message, self, messageArray, commandName, args);
		} catch (error) {
			console.error(error);
			client.say(channel, 'There was an unexpected error in executing that command, please check the bot logs for more information.');
		}
	};

	// give user bal +10 every minute watched
});
client.on('join', async (channel, username, self) => {
	client.host(process.env.userrname, process.env.channel).then(console.log(`now hosting: ${process.env.channel}`));
});