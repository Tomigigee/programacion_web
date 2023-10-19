

function handleButtonClick(e){
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;

    if (songName == ""){
        alert("por favor, ingrese una cancion");

    }
    else{
        var li = document.createElement("li");
        li.innerHTML = songName
    }

}