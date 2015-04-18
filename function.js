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
	
		// dates.sort(function(a,b){return b - a});
		// books.forEach(function(title) {
		// 	$('.js-feed-posts').append("<li>" + title.title +"<br>"+ "Published in:" +" "+ title.published + "</li>");
		// });

		var publishedBooks = {};
		for (var i=0; i<data.news.length; i++) {
			var dates = data.news[i].published;
			var books = data.news[i].title;
			publishedBooks[dates] = books;
		}
console.log(publishedBooks);
console.log(publishedBooks['2015-04-01 02:00:00']);
	});
}











