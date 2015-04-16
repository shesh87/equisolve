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
		// data.forEach(function(data) {
		// 	$('.js-feed-posts').append("<li>" + data.data.news[0].title + "</li>");
		// });
		// for(var i =0; i < data.length; i++) {
		// 	$('.js-feed-posts').append("<li>" + "cheese" + "</li>");
		// }
		var books = [];
		for (var i=0; i<data.news.length; i++) {
			var booksDescript = books.push(data.news[i]);
		}
		console.log(books);
	
		books.forEach(function(title) {
			$('.js-feed-posts').append("<li>" + title.title + "</li>");
		});
	});
}





