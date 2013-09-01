// implementar duas classes, sendo que uma é herança de outra, e a classe "filha" deverá chamar um método da classe "pai"

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
	var that = person(spec),
		spec = spec || {},
		superSpeak = that.speak;

	that.speak = function() {
		return superSpeak() + " que desenvolve softwares" // Aqui ele chama o método da classe pai.
	};

	return that;
};

