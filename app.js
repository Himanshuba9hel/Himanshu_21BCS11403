function change_song(name){
    name = "/music_list/"+name;
    document.getElementById("music_player").src = name;
}

var a = document.getElementById("music_player");
function playaudio() {
    a.play();
}
function pauseaudio() {
    a.pause();
}
function stopaudio() {
    a.pause();
    a.currentTime = 0;
}