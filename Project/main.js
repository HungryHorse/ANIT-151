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
		var roomChoices = "<button id='normalButton' type='button' onclick=SelectRoom(" + roomArray[roomIndex].choices[i].index + ")>" + roomArray[roomIndex].choices[i].text + "</button>";
		document.getElementById("roomButton").innerHTML += roomChoices;
	}
}
