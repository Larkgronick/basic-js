class VigenereCipheringMachine {
    constructor (reverse) {
        this.reverse = reverse;
    }
    
    encrypt(message, key) {
        if(message == undefined || key == undefined ){
            throw new Error;
        }
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let lettersOnly = message.toUpperCase().split(''); 
        let fullKey = key.repeat(Math.ceil(lettersOnly.length/key.length)).substring(0, lettersOnly.length).toUpperCase().split(''); 
        let cipher = [];
        lettersOnly.forEach((item, index) => {
            if(item.match(/[^a-zA-Z]+/)==null){
            let delimiter = alphabet.indexOf(item);
            let rightSide = alphabet.slice(0, delimiter);
            let leftSide = alphabet.slice(delimiter, alphabet.length);
            let cipherArr =  leftSide.concat(rightSide);
            cipher.push(cipherArr[alphabet.indexOf(fullKey[index])]);
        } else {
            fullKey.splice(index,0, ' ');
            cipher.push(item);
        }
        });
        return this.reverse == false ? cipher.reverse().join('') : cipher.join('');
    }
    decrypt(encryptedMessage, key) {
        if(encryptedMessage == undefined || key == undefined ){
            throw new Error;
        }
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let lettersOnly = encryptedMessage.toUpperCase().split('');
        let fullKey = key.repeat(Math.ceil(lettersOnly.length/key.length)).substring(0, lettersOnly.length).toUpperCase().split('');
        let symbols = '1234567890!@#$(),./|*-&^%:'.split('');
        encryptedMessage.split('').forEach((elem,index)=>{
          if(encryptedMessage[index] == ' '){
              fullKey.splice(index, 0 , ' ');
          }
          if(symbols.includes(elem)){
              fullKey.splice(index, 0 , elem); 
          }
      });
        let adaptKey = fullKey.slice(0, encryptedMessage.length);
        let decipher = [];
        adaptKey.forEach((item, index) => {
            if(item.match(/[^a-zA-Z]+/)==null){
            let delimiter = alphabet.indexOf(item);
            let rightSide = alphabet.slice(0, delimiter);
            let leftSide = alphabet.slice(delimiter, alphabet.length);
            let cipherArr =  leftSide.concat(rightSide);
            decipher.push(alphabet[cipherArr.indexOf(lettersOnly[index])]);
        } else {
            decipher.push(item);
        }
        
        });
        return this.reverse == false ? decipher.reverse().join('') : decipher.join('');
    }
}

module.exports = VigenereCipheringMachine;