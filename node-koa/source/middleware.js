const add = (x, y) => x + y;
const square = z => z * z;

// fn定死
const fn = (x, y) => square(add(x, y));

console.log('fn: ', fn(1, 2));

// 只能传2个参数
const compose1 = (fn1, fn2) => (...args) => fn2(fn1(...args));
console.log('compose1: ', compose1(add, square)(1, 2));
// 可传入多个要执行的函数
const compose2 = (...[first, ...other]) => (...args) => {
	let ret = first(...args);
	other.forEach(fn => {
		ret = fn(ret);
	});
	return ret;
};
console.log('compose2: ', compose2(add, square, square)(1, 2));
// 使用reduce
const compose3 = (...funcs) => (...args) => {
	if (funcs.length === 0) {
		return args => args;
	}
	if (funcs.length === 1) {
		return funcs[0];
	}
	return funcs.reduce((preFn, currentFn) => {
		return typeof preFn === 'function' ? currentFn(preFn(...args)) : currentFn(preFn);
	});
};
console.log('compose3: ', compose3(add, square, square)(1, 2));
