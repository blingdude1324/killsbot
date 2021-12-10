const tmi = require('tmi.js');
var formatDistance = require('date-fns/formatDistance')
const fs = require('fs');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'jconetchloe',
		password: process.env.pass
	},
	channels: [ "jconet" ]
});

client.connect().then(console.log("Chat Bot Active"));

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

    if(tags['username'] === "streamlabs") return;

    let cmd = message.toLowerCase();
	const command = client.commands.get(cmd.commandName);

	if (!command) return;

	try {
		await command.execute(cmd, tmi, formatDistance, fs, client, channel, tags, message, self);
	} catch (error) {
		console.error(error);
	}
});