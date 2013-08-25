var potencia;

var quadrado = potencia(2);

console.log(quadrado(2)); // 4
console.log(quadrado(3)); // 9
console.log(quadrado(4)); // 16

var cubo = potencia(3);

console.log(cubo(2)); // 8
console.log(cubo(3)); // 27
console.log(cubo(4)); // 64

// implementar a função potência usando closure.
function potencia(expoente) {
	return function(numero) {
		var contador = expoente;
		var resultado = 1;
		while(contador > 0) {
			resultado *= numero;
			contador -= 1;
		}
		return resultado;
	};
}