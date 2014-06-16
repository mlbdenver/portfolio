$(document).ready( function() {
	$('.numberIn').submit( function(event){
		// zero out results if previous search has run
		$('.results').html('');
		$('.header h1 span').html('');
		// get the value of the tags the user submitted
		var numIn = $(this).find("input[name='numIn']").val();
		getTrivia(numIn);
	});
});

//make enter submit button - does this need to go in the section above?
    $("#entry").keyup(function(event) {
        if(event.keyCode == 13){
            $("#button").click();
        }
	});



// takes error string and turns it into displayable DOM element
var showError = function(error){
	var errorText = '<p>' + error + '</p>';
	$('.results').append(errorText);
};

// takes a string of semi-colon separated tags to be searched
// for on StackOverflow - Not sure if the type is right
var getTrivia = function(numIn) {
	// the parameters we need to pass in our request to StackOverflow's API
	
	var request = numIn;
	var result = $.ajax({
		url: "http://numbersapi.com/",
		data: request,
		dataType: "jsonp",
		type: "GET",
		})
	.done(function(result){
		$('.header h1 span').append(numIn);
		$('.results').append(result);
		})
	.fail(function(jqXHR, error, errorThrown){
		var errorElem = showError(error);
		$('.results').append(errorElem);
	});
};



