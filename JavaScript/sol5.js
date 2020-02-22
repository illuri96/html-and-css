const filter_non_unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
console.log(filter_non_unique([1, 2, 2, 3, 3, 4, 5, 6]));