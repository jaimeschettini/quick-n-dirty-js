// implementar uma "classe" com atributos/métodos privados
var classe = function(spec) {
	var that = {};

	var mySpec = spec || {};

	var name = mySpec.name || "Jaime",
		age = mySpec.age || 27, //my age

		incrementAge = function() {
			age++;
		};

	var getName = function() {
		return name;
	};

	that.getName = getName;

	return that;
}