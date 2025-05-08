function displayLevelInfo() {
	var levelEntry = document.getElementById('levelInput').value;
	
	switch (levelEntry){
	  case 1 
		document.getElementById("displayLevel").innerHTML = 
		"Level: Easy Mode";

	  case 2 
		document.getElementById("displayLevel").innerHTML = 
		"Level: Normal Mode";

	  case 3
	 	document.getElementById("displayLevel").innerHTML = 
		"Level: Hard Mode";

	default:
		window.alert("Invalid Section Number")
	}
}