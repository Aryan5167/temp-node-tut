// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum(what we want))


const names=require('./names');

const {john,peter}=names;
console.log(names);

const sayHi=require('./utils');

sayHi('susan');
sayHi(john);
sayHi(peter)