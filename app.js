var t = true;
function change_song(name ,img){
    document.getElementById("music_player").src = name;
    //document.getElementById("music_player").autoplay = true;
    document.getElementById("music_image").src = img;
    const att = document.createAttribute("allow");
    att.value = "autoplay";
    const mp = document.getElementById("music_player");
    mp.setAttributeNode(att);
       
    

}
function start_audio(){
}

