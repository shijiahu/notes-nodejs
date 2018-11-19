
const fs = require('fs');

var fetchNotes = () =>{
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}catch(e){
		return [];
	}
}

var saveNotes = (notes) =>{
	fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNotes = (title, body) =>{
	var notes = fetchNotes();
	var note = {
		title,
		body
	}
	var duplicateNotes = notes.filter((note) => note.title === title)
	// see if there are duplicates
	if (duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes)
		return note;
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