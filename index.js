var converter = require('number-to-words');

var pr1=converter.toOrdinal(321);
var pr2=converter.toWords(4135134523646);
var pr3=converter.toWordsOrdinal(54);


console.log(pr1+"\n"+pr2+"\n"+pr3);