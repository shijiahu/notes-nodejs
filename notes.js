
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
	return fetchNotes();
}
var removeNote = (title) =>{
	var notes = fetchNotes();
	var filterNotes = notes.filter((note) => note.title !== title)
	// see if there are duplicates
	saveNotes(filterNotes)
	if (notes.length !== filterNotes.length){
		return true
	} return false
}
var getNote = (title) =>{
	var notes = fetchNotes();
	var filterNotes = notes.filter((note) => note.title === title)
	if (filterNotes.length != 0) {
		return filterNotes[0]
		// must [0] or it will return a [{}]
	}
}

var logNote = (note) =>{
	console.log("-----");
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

module.exports = {
	addNotes,
	getAll,
	removeNote,
	getNote,
	logNote
};

// console.log(module);

// module.exports.add = (a,b) =>{
// 	return a + b
// }