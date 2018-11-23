var square = (x) => x * x

console.log(square(9));

var user = {
	name: 'Shijia',
	sayHi: () =>{
		console.log(`Hi, I'm ${this.name}.`)
	},
	sayHiAlt () {
		console.log(arguments);
		// { '0': 1, '1': 2, '2': 3 }
		console.log(`Hi, I'm ${this.name}.`)
	}
}

// user.sayHiAlt()

user.sayHiAlt(1,2,3)
// { '0': 1, '1': 2, '2': 3 }