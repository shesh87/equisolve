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

		var books = [];
		var dates = [];
		for (var i=0; i<data.news.length; i++) {
			books.push(data.news[i]);
			dates.push(data.news[i].published);
		}
		console.log(books);
		console.log(dates);
	
		dates.sort(function(a,b){return b - a});
		books.forEach(function(title) {
			$('.js-feed-posts').append("<li>" + title.title +"<br>"+ "Published in:" +" "+ title.published + "</li>");
		});

	});
}





