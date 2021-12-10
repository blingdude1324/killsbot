module.exports = {
    name: "wet",
    description: "A fun command to see how 'wet' you are.",
    async execute(client, tmi, formatDistance, fs, channel, tags, message, self, messageArray, commandName, args) {
        let min = Math.ceil(0);
		let max = Math.floor(100);
		let percentage = Math.floor(Math.random() * (max - min + 1)) + min;
		client.say(channel, `${tags.username}, you are ${percentage}% wet!`);
    },
};