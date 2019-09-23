var reg = /d/;
var reg = new RegExp('\d')
console.log(reg.test('qwert123456')) //false
console.log(reg.test('abcddd123456')) // true
var reg = /\d/;
var reg = new RegExp('\\d')
console.log(reg.test('qwert123456')) //true
console.log(reg.test('abcddd123456')) // true

var reg = /\\d/;
console.log(reg)
console.log(reg.test('qwert123456')) //false
console.log(reg.test('abc\\ddd123456')) // true

var reg = /\w/
console.log(reg.test('_'))

var reg = /\d?/ 
console.log(reg.test('qweres'))


var reg = /\d{2}/
console.log(reg.test('qerq2sdsaafds'))//false
console.log(reg.test('qerq23sdsaafds'))//true
console.log(reg.test('qerq2113sds11113aafds'))//true

var reg = /\d{2,3}/
console.log(reg.test('qerq2sdsaafds'))//false
console.log(reg.test('qerq23sdsaafds'))//true
console.log(reg.test('qerq2113sds11113aafds'))//true



var reg = /^d/
console.log(reg.test('qerq2sdsaafds'))//false
console.log(reg.test('qerq2sdsaafds'))//false

var reg = /^\d/
console.log(reg.test('qerq2sdsaafds'))//false
console.log(reg.test('qerq2sdsaafds'))//false

var reg = /^\w/
console.log(reg.test('qerq2sdsaafds'))//true
console.log(reg.test('qerq2sdsaafds'))//true

var reg = /d$/
console.log(reg.test('qerq2sdsaafds'))//false
console.log(reg.test('qerq2sdsaafds'))//false
console.log(reg.test('ddd'))//true

var reg = /\d$/
console.log(reg.test('qerq2sdsaafds'))//false
console.log(reg.test('qerq2sdsaafds'))//false
console.log(reg.test('ddd'))//false