正则是引用数据类型
var reg = /\d/;  // 字符串中 有数字即可
var reg = /^\d/;  // 字符串需要以数字开头
var reg = /\d$/;  // 字符串需要以数字结尾
var reg = /^\d$/;  //
var reg = new RegExp('\\d');

console.log(reg.test('qwer234wer'))