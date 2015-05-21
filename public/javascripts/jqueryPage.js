(function(){
	$('form')[0].addEventListener('submit', function(event){
		event.preventDefault();
		$.ajax("http://teamtreehouse.com/" + $("input")[0].value + ".json", {
			dataType: 'json',
			success: function(entry) {
				// console.log(entry);
				document.write(entry.name + " has completed " + entry.badges.length + " badges on Treehouse.<br /> <br />");
				for(var i = 0; i<entry.badges.length; i++){
					document.write(entry.badges[i].name + "<br />");
				}
			},
			error: function(){
				alert("This username does not exist.");
			}
		});
	})
})();