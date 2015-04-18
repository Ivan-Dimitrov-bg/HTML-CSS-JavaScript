function showHide() {
	var checkbox = document.getElementById("chkkk");
	var hiddeninputs = document.getElementsByClassName("hidden");

	for (var i = 0; i != hiddeninputs.length; i++) {
		if (checkbox.checked) {
			hiddeninputs[i].style.display = "block";
		}
		else {
			hiddeninputs[i].style.display = "none";
		}

	}
}