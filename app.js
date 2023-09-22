function change_song(name){
    name = "/music_list/"+name;
    document.getElementById("music_player").src = name;
}

let directory_name = "music_list";

// Function to get current filenames
// in directory
let filenames = fs.readdirSync(directory_name);

console.log("\nFilenames in directory:");
console.log(filenames);

filenames.forEach((file) => {
	console.log("File:", file);
});
