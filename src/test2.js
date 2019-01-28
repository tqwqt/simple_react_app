

class Animal {
	constructor(name){
		this._name = name;
	}
	getName() {
		console.log(this._name);
		return this._name;
	}
}

class Dog extends Animal{
	constructor(name){
		super(name);
	}
	bark(){
		console.log('Dog ' + this._name + ' is barking!');
	};
}

let dog = new Dog('Aban');
dog.getName();
dog.bark();