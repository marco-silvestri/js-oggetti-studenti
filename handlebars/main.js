// Reference for Handlebars
var source = $('#mainTemplate').html();
var template = Handlebars.compile(source);

var inputArea = $('.input-area input');
var buttonSend = $('.input-area button');
var chatArea = $('.chat-area');
var message = {};

buttonSend.click(function() {
    sendMessage(inputArea.val(), 'sent', '17.00');
    setTimeout(function(){
        sendMessage('I am a dummy', 'received', '17.01');
    }, 1000);
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