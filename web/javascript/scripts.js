//var formData = JSON.stringify($("#myForm").serializeArray());

var title3 = document.querySelector("#title");
var valuesToShow2 = document.querySelector("#valuesToShow");
var boto1 = document.querySelector("#boto1");
var xhttp = new XMLHttpRequest();


function sendJson(){
	let title = title3.value;
	let valuesToShow = valuesToShow2.value.split(",");
	var myJsonString = JSON.stringify({ "title" : title, "valuesToShow": valuesToShow});
	console.log(title);
	console.log(valuesToShow);
	console.log(myJsonString);
	xhttp.open("POST", "localhost:8080/graphic", true);
	xhttp.send(myJsonString);
}
window.onload=function(){

boto1.addEventListener("click", sendJson, false);

}
