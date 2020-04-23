// Reference for Handlebars
var source = $('#mainTemplate').html();
var template = Handlebars.compile(source);

// Fill the template
var data = {
    myTitle : 'A title that rocks!',
    myText : 'And this is a text that rocks too.'
};

// Init a variable with the generated markup
var output = template(data);

// Append the generate markup to the html ref
$('main').append(output);

