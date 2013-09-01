// 1
(function() {
setTimeout(someFunction1, 10);
var someFunction1 = function() { alert('here1'); };
})();

// 2
(function() {
setTimeout(someFunction2, 10);
function someFunction2() { alert('here2'); }
})();

// 3
(function() {
setTimeout(function() { someFunction3(); }, 10);
var someFunction3 = function() { alert('here3'); };
})();

// 4
(function() {
setTimeout(function() { someFunction4(); }, 10);
function someFunction4() { alert('here4'); }
})();

// Qual o resultado?