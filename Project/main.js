function OnLoad()
{
	SelectRoom(0);

}

function SelectRoom(roomIndex)
{
	document.getElementById("roomButton").innerHTML = "";
	document.getElementById('roomName').innerHTML = roomArray[roomIndex].title;
	document.getElementById('description').innerHTML = roomArray[roomIndex].text;
	for (var i = 0; i < roomArray[roomIndex].choices.length; i++) {
		var text = "<p id='buttonTextTag'>" + roomArray[roomIndex].choices[i].text + "</p>";
		var roomChoices = "<button id='normalButton' type='button' onclick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ") style='vertical-align:middle'><span>" + roomArray[roomIndex].choices[i].buttonText + "</span></button>";
		document.getElementById("roomButton").innerHTML += text;
		document.getElementById("roomButton").innerHTML += roomChoices;
		document.getElementById("roomButton").innerHTML += '</br>'
	}
}
