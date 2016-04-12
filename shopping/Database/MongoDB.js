var crypt=require('../include/Crypt_function.js');

var crypto=new crypt('wanghaoyudss','0001101010101');

console.log(crypto.encrypt);
console.log(crypto.decrypt);
console.log(crypto.about());