// implementar duas classes, sendo que uma é herança de outra, e a classe "filha" deverá sobreescrever um método da classe "pai"

var person = function(spec, my) {
	var that = {},
		spec = spec || {},
		my = my || {};

	var name = spec.name,
		age = spec.age,
		sound = "Oi, eu sou uma pessoa";

	my.name = name;
	my.age = age;
	my.sound = sound;

	var speak = function() {
		return sound;
	};

	that.speak = speak;
	
	return that;
};


var developer = function(spec) {
	var parent = {};
	var that = person(spec, parent);

	var spec = spec || {};

	that.speak = function() { // método sobrescrito.
		return parent.sound + " que desenvolve softwares"
	};

	return that;
};

