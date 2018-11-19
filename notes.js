
const fs = require('fs');

var addNotes = (title, body) =>{
	var notes = [];
	var note = {
		title,
		body
	}

	try {
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString)
	}catch(e){

	}

	var duplicateNotes = notes.filter((note) => note.title === title)
	// see if there are duplicates
	if (duplicateNotes.length === 0){
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes))
	}
};

var getAll = () =>{
	console.log("All note listed")
}
var removeNote = (title) =>{
	console.log("note removed")
}
var readNote = (title) =>{
	console.log("note read")
}

module.exports = {
	addNotes,
	getAll,
	removeNote,
	readNote
};

// console.log(module);

// module.exports.add = (a,b) =>{
// 	return a + b
// }