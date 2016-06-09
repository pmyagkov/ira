var a = 1;

/* Цепочки контекстов — замыкание для функции */

console.log(a + 1);

function someFunc(c, d) {

	function another(a) {
		return c + a;
	}

	another(2);
}


var compose = function (func, a, b) {
	return func(a, b);
};

function sum(a, b) {
	return a + b;
}

function diff(a, b) {
	return a - b;
}


console.log(compose(sum, 1, 2));
console.log(compose(diff, 1, 2));


var arr = [sum, diff];
for (var i = 0; i < arr.length; i++) {
	var elem = arr[i];
	console.log(compose(elem, 1, 2));
}





