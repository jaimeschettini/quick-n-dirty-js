// implementar usando module-pattern e as funções do challenge-1, um módulo que
// contenha a api "quadrado" e "cubo" públicas, valendo!

var module; // implementar essa bosta

module = (function() {
	var potencia = function (expoente) {
		return function(numero) {
			var contador = expoente;
			var resultado = 1;
			while(contador > 0) {
				resultado *= numero;
				contador -= 1;
			}
			return resultado;
		};
	};

	return {
		quadrado: potencia(2),
		cubo: potencia(3)
	};
}());

console.log(module.quadrado(2)); // 4
console.log(module.quadrado(3)); // 9
console.log(module.quadrado(4)); // 16

console.log(module.cubo(2)); // 8
console.log(module.cubo(3)); // 27
console.log(module.cubo(4)); // 64
