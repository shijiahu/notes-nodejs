
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
console.log(yargs.argv);
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
	notes.addNotes(argv.title, argv.body);
}else if(command === 'remove') {
	notes.removeNote(argv.title)
}else if(command === 'read') {
	notes.readNote(argv.title)
}else{
	console.log("command not recognized");
}
// var user = os.userInfo();
// var note = notes.addNotes();
// var sum = notes.add(1,5);
// console.log(sum, 5);

// fs.appendFileSync('greeting.txt', `Hello ${user.username}!`);


