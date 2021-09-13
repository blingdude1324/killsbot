const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: 'killsfamchatbot',
		password: process.env.pass
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
		client.say(channel, `@${tags.username}, Hey! How's it going?`);
	};

    if(command.startsWith('yeet')) {
        let parameters = message.split(' ').filter(n => n);
        if (!parameters[1]) {
            let min = Math.ceil(100);
            let max = Math.floor(1000);
            let dist = Math.floor(Math.random() * (max - min + 1)) + min;
            client.say(channel, `@${tags.username}, you just got yeeted ${dist} feet! kiykilLetsgo`);
        } else {
            let min = Math.ceil(100);
            let max = Math.floor(1000);
            let dist = Math.floor(Math.random() * (max - min + 1)) + min;
            client.say(channel, `${parameters[1]}, you just got yeeted ${dist} feet! kiykilLetsgo`);
        };
    };

    if(command === 'rip') {
        client.say(channel, `@${tags.username} is getting ripped tonight, RIP that pussy EHHHHH!`);
    };

    if(command === 'phd') {
        let min = Math.ceil(1);
        let max = Math.floor(12);
        if (tags['username'] === "jconet") {
            size = Math.floor(13);
            client.say(channel, `@${tags.username} has a phd of ${size} inches! UWot`);
        } else if (tags['username'] === "kiykills") {
            size = Math.floor(16);   
            client.say(channel, `@${tags.username} has a phd of ${size} inches! UWot Holy... That is the biggest one I have ever seen! <3`);     
        } else if (tags['username'] === "outinspace11") {
            size = Math.floor(12);
            client.say(channel, `Hey there BIG DADDY SPACE! You are still rocking hard with that PHD of ${size} inches my man!`)
        } else if (tags['username'] === "hunterisgaming") {
            client.say(channel, `@${tags.username} has a phd of 7.9 inches! UWot`);
        } else if (tags['username'] === "whiteiron883") {
            client.say(channel, `@${tags.username} has a phd of 8 inches! Officially the superior Hunter! UWot`);
        } else {
            size = Math.floor(Math.random() * (max - min + 1)) + min;
            client.say(channel, `@${tags.username} has a phd of ${size} inches! UWot`);
        }
    };

    if(command === 'birthday') {
        client.say(channel, `@${tags.username} Kiy turns 24 on August 13th! Want to get her a birthday present to open on stream? do it here: https://www.amazon.com/hz/wishlist/ls/1O31446L894KM/ref=nav_wishlist_lists_1?_encoding=UTF8&type=wishlist [us] https://www.amazon.ca/hz/wishlist/ls/1QMBWY1ZOPOYJ?ref_=wl_share [ca] https://www.amazon.ca/hz/wishlist/ls/2UGCQPXRVM4D3?ref_=wl_share [cosplay]`);
    };

    if(command === 'customs rules') {
        client.say(channel, `@${tags.username} The customs rules are as follows... 1) NO PUSSY SHIT! 2) NO CAMPING LOADOUT! 3) NO CUSTOM SHOTGUNS!`);
    }

    if(command.includes('daddy space')) {
        client.say(channel, `Hell yeah, KillsFam, show some love for BIG DADDY SPACE!!!!`);
    }

    if(command === "help") {
        client.say(channel, `@${tags.username} The commands are as follows. hello, rip, phd, yeet, birthday, custom rules, daddy space.`);
    }

    if(command === "hotmic") {
        client.say(channel, `@${tags.username}, Kiy only does the sexual hotmics! It is what we love about her!`);
    }

    if(command === "rbr") {
        client.say(channel, `What is with this pussy ass rat bitch shit?!?!`);
    }

    if(command === "!queue" || command === "queue") {
        client.say(channel, `@${tags.username}, we are yet to figure out a way to get this command working, please be patient with us as we try to get this implemented ASAP!`);
    }

    if(command.includes('mommy kiy')) {
        if (tags.mod) {
            client.say(channel, `@${tags.username}, Mommy Kiy says... YOU ARE GROUNDED FAM!`);
        } else {
            client.say(channel, `@${tags.username}, Mommy Kiy says... YOU ARE GROUNDED FAM!`);
            client.say(channel, `/timeout @${tags.username} 10`);
        };
    }
});
