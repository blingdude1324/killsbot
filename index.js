const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'killsfamchatbot',
		password: 'oauth:mff18g79w8ypmypk6f3z8ho4ge83ak'
	},
	channels: [ 'kiykills', 'jconet' ]
});

client.connect().then(console.log("Chat Bot Active"));

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

    let command = message.toLowerCase();

	if(command.startsWith('hello') || command.startsWith('hey') || command.startsWith('hi')) {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, hello! How's it going fam?`);
	};

    if(command === 'yeet') {
        let min = Math.ceil(100);
        let max = Math.floor(1000);
        let dist = Math.floor(Math.random() * (max - min + 1)) + min;
        client.say(channel, `@${tags.username}, you just got yeeted ${dist} feet! kiykilLetsgo`);
    };

    if(command === 'rip') {
        client.say(channel, `@${tags.username} is getting ripped tonight, RIP that pussy EHHHHH!`);
    };

    if(command === 'phd') {
        let min = Math.ceil(1);
        let max = Math.floor(12);
        if(tags['username'] === "jconet") {
            size = Math.floor(13);
            client.say(channel, `@${tags.username} has a phd of ${size} inches! UWot`);
        } else if (tags['username'] === "kiykills") {
            size = Math.floor(16);   
            client.say(channel, `@${tags.username} has a phd of ${size} inches! UWot Holy... That is the biggest one I have ever seen! <3`);     
        } else {
            size = Math.floor(Math.random() * (max - min + 1)) + min;
            client.say(channel, `@${tags.username} has a phd of ${size} inches! UWot`);
        }
    };

    if(command === 'birthday') {
        client.say(channel, `@${tags.username} Kiy turns 24 on August 13th! Want to get her a birthday present to open on stream? do it here: https://www.amazon.com/hz/wishlist/ls/1O31446L894KM/ref=nav_wishlist_lists_1?_encoding=UTF8&type=wishlist`);
    };

    if(command === 'customs rules') {
        client.say(channel, `@${tags.username} The customs rules are as follows... 1) NO PUSSY SHIT! 2) NO CAMPING LOADOUT! 3) NO CUSTOM SHOTGUNS!`);
    }

    // if(command === 'sweaty') {
    //     client.say(channel, ``);
    // }
});