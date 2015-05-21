(function(){
	$('.button').blur();

	$('.button').click(function(event){
		event.preventDefault();
		$.ajax("http://teamtreehouse.com/" + $("input")[0].value + ".json", {
			dataType: 'json',
			success: function(entry) {
				console.log(entry);
				document.write("<h1>" + entry.name + " has completed " + entry.badges.length + " badges on Treehouse.<br /><br /></h1>");
				for(var i = 0; i<entry.badges.length; i++){
					document.write("<div>" + entry.badges[i].name + "<br /></div>");
					if(entry.badges.length<50){
						$('body').css('background-color', 'red').css('color', 'white');
					} else if(entry.badges.length<100){
						$('body').css('background-color', '#00FF00' ).css('color', '#0000CD');
					} else {
						$('body').css('background-color', '#0000CD').css('color', '#B0C4DE');
					}
				}
				document.write(" <br/> Refresh the page to search another Treehouse user");
			},
			error: function(){
				document.write("This username does not exist. Refresh the page to search another Treehouse user");
				$('body').css('background-color', 'black').css('color', 'white');
			}
		});
	});
})();