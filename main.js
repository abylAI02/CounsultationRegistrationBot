const TelegramBot = require('node-telegram-bot-api');

const token = '';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
var array = new Array ("Monday 09:00",  "Monday 10:00",  "Monday 11:00",
        "Monday 12:00",
        "Monday 13:00",
        "Monday 14:00",
        "Monday 15:00",
        "Monday 16:00",
        "Monday 17:00",
        "Monday 18:00",);
var users = ["aa", "bb"];

bot.onText(/\/start/, function registrar(msg) {
  const opts = {
    reply_to_message_id: msg.message_id,
    reply_markup: JSON.stringify({
      keyboard: [ array      
      ]
    })
  };
  bot.sendMessage(msg.chat.id, "Hello " + msg.from.first_name + "!\nWhat time is suitable for you?", opts);
  
});

bot.onText(/\/support/, function support(msg) {
  bot.sendMessage(msg.chat.id, 'Contact @abyl0i');
});



bot.on('message', (msg) => {

  	const adminID = ;
  	let user;
  	const userUsername = msg.chat.username;
  	
	var Hi = "hi";
	if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
		bot.sendMessage(msg.chat.id,"Welcome to AITU Counsultation Registration Bot!\nHow can I help you " + msg.from.first_name + " ?" + "\nPlease use commands");
	}
	
	var bye = "bye";
	if (msg.text.toString().toLowerCase().includes(bye)) {
    		bot.sendMessage(msg.chat.id, Take care ❤️, Bye");
	}
	
	for (let i = 0; i < users.length; i++) {
  		if (users[i] == userUsername) {
  			user = 1;
    		}
    	}
	
		for (let i = 0; i < array.length; i++) {
			var day = array[i];
	  		if (msg.text.toString().includes(day)) {
	  			array.splice(i, 1);
	    			bot.sendMessage(msg.chat.id, "See you on session!");
	    			bot.sendMessage(adminID, "Username: " + userUsername + "\nTime: " + day + "\nUser ID: " + msg.chat.id);
	    			users.push(userUsername);
	    			//bot.forward_message(adminID, msg.chat.id, msg);
	    		}
	    	}
});

