// Use jQuery to complete the following challenges

// Get the value from the text input element and populate the output with the input value
var $inputField = $('#inputField'),
	$outputField = $('#outputField');

$inputField.keyup(function() {
 $outputField.text($inputField.val());
})

// Style the 'h1' element dynamically when the user hovers over it
var $h1Element = $($('h1')[0]);
var cssObject = {
	'font-size': '40px',
		'fontFamily': 'Comic Sans Serif',
		'color': 'purple',
		'backgroundColor': '#39add1',
		'borderRadius': '10px'
}
$h1Element.mouseover(function() {
	$h1Element.css(cssObject);
});
// When a user clicks the 'hide this card' link in the cards, hide that card.
var $cardAnchors = $('.card a');
$cardAnchors.each(function(cardAnchor) {
	var $cardAnchor = $($cardAnchors[cardAnchor]);
	 $cardAnchor.click(function() {
	 $(this).parent().hide();
	 });
});

// Change the style of the 'p' elements when you double click them
var $allParagraphs = $('p');

$allParagraphs.each(function(index) {
	$($allParagraphs[index]).dblclick(function() {
		var cssValues = {
			'lineHeight': '2',
			'backgroundColor': 'blue',
			'font-size': '30px',
			'color': 'white'
		}
		$(this).css(cssValues);
	});
});

// Add an element to the 'main' element when the user adds html in an prompt box.
var $userInput = $(prompt('What HTML element do you want to add to \'main\'')),
	$mainElement = $('main');

$mainElement.append($userInput);




















