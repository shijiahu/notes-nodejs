var person = {
	name: "Shijia",
}

person.age = 25

person.name = 'Jane'

debugger;
// a break point, run code stop here, use 'c'

console.log(person)

// 1.
// node inspect playground/debugging.js
// list(10)
// n     (means next)
// c     (means continue)
// repl  (read evaluate and print loop)


// 2.
// node --inspect-brk playground/debugging.js
// chrome://inspect