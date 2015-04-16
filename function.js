// $.ajax({
// 	dataType: "json",
// 	url: 'http://www.stellarbiotechnologies.com/media/press-releases/json',
// 	data: data
// }).done(function( msg ) {

// };

window.onload = function() {
  feed();
};

function feed() {
	$.getJSON( 'http://www.stellarbiotechnologies.com/media/press-releases/json', function( data ) {
		console.log(data);
		console.log(data.news[0].title);
		console.log(data.news[0].published);
		msg.forEach(function(data){
			
		});
	});
}