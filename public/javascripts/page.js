(function(){
	var userName = document.getElementsByTagName('input');
	var theForm = document.getElementsByTagName('form')[0];
	theForm.addEventListener('submit', function(event){
		event.preventDefault();
		// JSONrequest(userName[0].value);
		var request = new XMLHttpRequest();
		request.onload = function() {
			var userInfo = JSON.parse(request.responseText);
			console.log(userInfo);
			document.write(userInfo.name + " has completed " + userInfo.badges.length + " badges on Treehouse.<br /> <br />");
			for(var i = 0; i<userInfo.badges.length; i++){
				document.write(userInfo.badges[i].name + "<br />");
			}
		};
		request.open("get", "http://teamtreehouse.com/" + userName[0].value + ".json");
		request.send();
	});
})();