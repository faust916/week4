function myFunction(){
	document.getElementById("textbox").style.fontSize = "24px";	
}


function fancy(){
	document.getElementById("textbox").style.fontWeight = "bold";
	document.getElementById("textbox").style.color = "blue";
	document.getElementById("textbox").style.textDecoration = "underline";
}

function boring(){
	document.getElementById("textbox").style.fontWeight = "normal";
	document.getElementById("textbox").style.color = "black";
	document.getElementById("textbox").style.textDecoration = "none";
}
	
function moo(){
	var x = document.getElementById("textbox").value;
  	x = x.toUpperCase();
  	

	var x = document.getElementById("textbox").value;
  	var str = x.split(".");
  	str = str.join("-moo.");
	document.getElementById("textbox").value = str;


}