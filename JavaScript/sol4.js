const pull_at_Index= (arr, pullarr) => {
	let removed = []
	let pulled = arr
		.map((v, i) => (pullarr.includes(i) ? removed.push(v) : v))
		.filter((v, i) => !pullarr.includes(i));

	arr.length = 0;
	pulled.forEach(v => arr.push(v));
	return removed;
};

let array1 = ['a', 'b', 'c', 'd'];
console.log(pull_at_Index(array1, [1, 3]));


