(function(){
	var request = new XMLHttpRequest();
	request.onload = function() {
    // console.log(this.responseText);
    	var userInfo = JSON.parse(request.responseText);
    	// console.log(userInfo);
    	document.write(userInfo.name + " has completed " + userInfo.badges.length + " badges on Treehouse. They are: <br /> <br />");
  //   	console.log(userInfo.badges.length);
    	for(var i = 0; i<userInfo.badges.length; i++){
			document.write(userInfo.badges[i].name + "<br />");
		}

	};
request.open("get", "http://teamtreehouse.com/nathanbrenner.json");
request.send();

	// var request = new XMLHttpRequest();
	// request.onload = function() {
	// 	if(request.readyState === 4){
	// 		var jsonData = JSON.parse(request.responseText);
	// 		console.log(jsonData);
	// 	}
	// };
	// request.open("get", "http://teamtreehouse.com/nathanbrenner.json");
	// request.send();
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