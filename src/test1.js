

function Animal(name) {
	this._name = name;
}
Animal.prototype.getName = function () {
	console.log( this._name);
	return this._name;
};


function Dog() {
	Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
	console.log('Dog ' + this._name + ' is barking!');
};

var dog = new Dog ('Aban');

dog.getName();// === 'Aban'; // true

dog.bark();// === 'Dog Aban is barking'; // true