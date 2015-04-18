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
	$.getJSON('http://www.stellarbiotechnologies.com/media/press-releases/json', function(data) {
		// console.log(data);
		// console.log(data.news[0].title);
		// console.log(data.news[0].published);
		
		var publishedBooks = {};
		for (var i=0; i<data.news.length; i++) {
			var dates = data.news[i].published;
			var books = data.news[i].title;
			publishedBooks[dates] = books;
		}
		var orderedBooks = [];
		for (var dates in publishedBooks) {
			orderedBooks.push([dates, publishedBooks[dates]]);
		}

		orderedBooks.sort(function(a, b){return a > b ? -1 : (a < b ? 1 : 0);});
		console.log(orderedBooks);
		for (var i =0; i<orderedBooks.length; i++) {
			// console.log(title + " = " + publishedBooks[title]);
			$('.js-feed-posts').append("<li class=lazy>" +"<p>"+ orderedBooks[i][0] +"</p>"+ "<p>"+ orderedBooks[i][1] +"</p>"+ "</li>");
		}

	});
}











