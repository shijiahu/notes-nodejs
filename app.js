
const fs = require('fs');
// require all features of the inner module 'fs' and store it into fs
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
// var command = process.argv[2];
// parse it is not easy, so we use yargs
// [ '/usr/local/bin/node',
//   '/Users/shijiahu/Desktop/notes-node/app.js',
//   'add' ]
var command = argv._[0]
// console.log(command);
// console.log(process.argv);
// console.log(yargs.argv); 
// { _: [ 'add' ], '$0': 'app.js' }

// example1:
// $ node app.js add --title secret
// add
// [ '/usr/local/bin/node',
//   '/Users/shijiahu/Desktop/notes-node/app.js',
//   'add',
//   '--title',
//   'secret' ]
// { _: [ 'add' ], title: 'secret', '$0': 'app.js' }

// example2:
// $ node app.js add --title=secret --body="this is my secret"
// { _: [ 'add' ],
//   title: 'secret',
//   body: 'this is my secret',
//   '$0': 'app.js' }

if (command === 'list') {
	notes.getAll();
}else if(command === 'add') {
	var note = notes.addNotes(argv.title, argv.body);
	if (note) {
		console.log("Note Created Successfully")
		notes.logNote(note)
	} else{
		console.log("Note Title Taken")
	}
}else if(command === 'remove') {
	var isDeleted = notes.removeNote(argv.title)
	if (isDeleted){
		console.log(`"${argv.title}" Note Successfully Deleted`)
	}else{
		console.log("Note Not Found")
	}
}else if(command === 'read') {
	var note = notes.getNote(argv.title);
	if (note){
		console.log("Note Found")
		notes.logNote(note)
	}else{
		console.log("Note Not Found")
	}
}else{
	console.log("command not recognized");
}
// var user = os.userInfo();
// var note = notes.addNotes();
// var sum = notes.add(1,5);
// console.log(sum, 5);

// fs.appendFileSync('greeting.txt', `Hello ${user.username}!`);


