// convert an object into a string
// var obj = {
// 	name : 'Shijia'
// };
// var stringObj = JSON.stringify(obj);

// console.log(stringObj)
// // {"name":"Shijia"}
// console.log(typeof stringObj)
// string


// convert a string into a obj
// var personString = '{"name":"Shijia", "age": 25}';
// var person = JSON.parse(personString);

// console.log(person)
// console.log(typeof person)

const fs = require('fs');

var originNote = {
	title: 'Some title',
	body: 'Some body'
}
// originNoteString
var originNoteString = JSON.stringify(originNote)
fs.writeFileSync('note.json', originNoteString)

var noteString = fs.readFileSync('note.json')
var note = JSON.parse(noteString)
// note
console.log(typeof note)
console.log(note.title)











