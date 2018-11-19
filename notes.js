

var addNotes = (title, body) =>{
	console.log("Adding note:", title, body)
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