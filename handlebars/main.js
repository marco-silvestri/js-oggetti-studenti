// Reference for Handlebars
var source = $('#mainTemplate').html();
var template = Handlebars.compile(source);

var inputArea = $('.input-area input');
var buttonSend = $('.input-area button');
var chatArea = $('.chat-area');
var message = {};

// Pre-populate the chat with a random number of messages, with random features
for (var i = 0; i < randomGenie(3,5); i++){
    var generatedTime = addZero(randomGenie(1,23))  + '.' + addZero(randomGenie(0,59));
    
    sendMessage(pickRandomAnswer(),randomStatus(randomGenie(0,100)),generatedTime);
};

// Send a message and an auto-response
buttonSend.click(function() {
    sendMessage(inputArea.val(), 'sent', getTimeFormatted());
    setTimeout(function(){
        sendMessage('I am a dummy', 'received', getTimeFormatted());
    }, randomGenie(800, 3500));
});

function sendMessage(messageContent, status, messageTime){
    // Fill an obj with the template refs
    message = {
        content : messageContent,
        timeStamp : messageTime,
        status : status
    };
    // Init a variable with the generated markup
    var output = template(message);

    // Append the generate markup to the html ref
    chatArea.append(output);
}

function randomGenie(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add the digit 0 to the time if the value has only one digit
function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
        return time;
};

// User friendly time format
function getTimeFormatted() {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    return h + "." + m;
};

// Pick a random answer from a collection
function pickRandomAnswer() {
    var answersCollection = [
        'Bella zio!',
        'Non capisco, puoi ripetere?',
        'Grazie, ho ricevuto il tuo PayPal.',
        'Va bene, pizza e birra allora?',
        'Anche io!',
        'Preferisco la seconda opzione.',
        'Hai ragione.',
        'Ti capisco perfettamente',
        'Lo sai che posso trattenere il respiro per 10 minuti?',
        'Si, ma scrivilo meglio.',
        'lol',
        'ahahah',
        'mmm?',
        'rotfl'
    ];
    var randomNumber = Math.random() * answersCollection.length | 0;
    return answersCollection[randomNumber];
};

// Return a random status
function randomStatus(randomNumber){
    if (randomNumber <= 50){
        return 'sent';
    }
    else {
        return 'received';
    }
};