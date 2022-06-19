// 1
let string = 'ahb acb aeb aeeb adcb axeb';
matchString = string.match(/a.b/g);
console.log(matchString);
// 2
let numericalString = '2 + 3 223 2223'
matchNumericalString = numericalString.match(/2\s\+\s3/g);
console.log(matchNumericalString);
// 3
let now = new Date();
console.log('today is ', now.getDate(), now.getMonth() + 1, now.getFullYear());