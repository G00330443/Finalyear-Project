

module.exports = function(data, key) {
    var crypto = require('crypto');
    console.log('Original cleartext: ' + data);
    var algorithm = 'aes-128-ecb';
    //var key = '78541561566';
    var clearEncoding = 'utf8';
    //var cipherEncoding = 'hex';
    //If the next line is uncommented, the final cleartext is wrong.
    var cipherEncoding = 'base64';
/*加密*/
    
        var cipher = crypto.createCipher(algorithm, key);
    
        var cipherChunks = [];
        cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
        cipherChunks.push(cipher.final(cipherEncoding));
        console.log(cipherEncoding + ' ciphertext: ' + cipherChunks.join(''));
      
      //answer  
        this.encrypt= cipherChunks.join('');
    
/*解密*/
    
         var decipher = crypto.createDecipher(algorithm, key);
         var plainChunks = [];
         for (var i = 0;i < cipherChunks.length;i++) {
             plainChunks.push(decipher.update(cipherChunks[i], cipherEncoding, clearEncoding));
     
         }
         plainChunks.push(decipher.final(clearEncoding));
         console.log("UTF8 plaintext deciphered: " + plainChunks.join(''));
         
   this.decrypt= plainChunks.join('');
   
   
    this.about = function() { 
   // console.log(plainChunks); 
    };
    
}; 
   
