(function(){
// function SearchUser(username){
	var request = new XMLHttpRequest();
	request.onload = function() {
		// console.log(this.responseText);
		var jsonData = JSON.parse(request.responseText);
		console.log(jsonData);
	};


	request.open("get", "http://teamtreehouse.com/nathanbrenner.json");
	request.send();
// }
	// var div = document.createElement('div');
	// document.body.appendChild(div);

	//search form
	// var theForm = document.getElementsByTagName('form')[0];
	// theForm.addEventListener('submit', SearchUser(username){
	// 	event.preventDefault();
	// 	// alert("The form has been clicked!");
	// 	console.log(username);
	// })
})();