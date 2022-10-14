const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(value = true) {
    this.startAlphabet = "A".charCodeAt();
    this.endAlphabet = "Z".charCodeAt();
    if (value == true) {
      this.type = "direct";
    } else if (value == false) {
      this.type = "reverse";
    }
  }
  workmachine(method, string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    string = string.toUpperCase();
    key = key.toUpperCase();
    let newString = "";
    for (let i = 0, j = 0; i < string.length; i++) {
      let charCode = string[i].charCodeAt();
      let encryptCode = key[j].charCodeAt();
      if (charCode >= this.startAlphabet && charCode <= this.endAlphabet) {
        let newSymbol =
          method == "decrypt"
            ? (charCode + 65 - (encryptCode - 65)) % 26
            : (charCode - 65 + (encryptCode - 65)) % 26;
        newString += String.fromCodePoint(newSymbol + 65);
        j = key[j + 1] ? (j = j + 1) : (j = 0);
      } else {
        newString += string[i];
      }
    }
    return this.type === "reverse"
      ? newString.split("").reverse().join("")
      : newString;
  }
  encrypt(string, key) {
    return this.workmachine("encrypt", string, key);
  }
  decrypt(string, key) {
    return this.workmachine("decrypt", string, key);
  }
}

// class VigenereCipheringMachine {
//   constructor(value = true) {
//     this.startAlphabet = "A".charCodeAt();
//     this.endAlphabet = "Z".charCodeAt();
//     if (value == true) {
//       this.type = "direct";
//     } else if (value == false) {
//       this.type = "reverse";
//     }
//   }
//   encrypt(string, key) {
//     if (!(string && key)) {
//       throw new Error("Incorrect arguments!");
//     }
//     string = string.toUpperCase();
//     key = key.toUpperCase();
//     let newM = "";
//     for (let i = 0, j = 0; i < string.length; i++) {
//       if (
//         string[i].charCodeAt() >= this.startAlphabet &&
//         string[i].charCodeAt() <= this.endAlphabet
//       ) {
//         let s = (string[i].charCodeAt() - 65 + (key[j].charCodeAt() - 65)) % 26;
//         String.fromCodePoint(s + 65);
//         string[i];
//         newM += String.fromCodePoint(s + 65);
//         j = key[j + 1] ? (j = j + 1) : (j = 0);
//       } else {
//         newM += string[i];
//       }
//     }

//     if (this.type == "reverse") {
//       return newM.split("").reverse().join("");
//     } else if (this.type == "direct") {
//       return newM;
//     }
//   }
//   decrypt(string, key) {
//     if (!(string && key)) {
//       throw new Error("Incorrect arguments!");
//     }
//     string = string.toUpperCase();
//     key = key.toUpperCase();
//     let newM = "";
//     for (let i = 0, j = 0; i < string.length; i++) {
//       if (
//         string[i].charCodeAt() >= this.startAlphabet &&
//         string[i].charCodeAt() <= this.endAlphabet
//       ) {
//         let s = (string[i].charCodeAt() + 65 - (key[j].charCodeAt() - 65)) % 26;
//         String.fromCodePoint(s + 65);
//         string[i];
//         newM += String.fromCodePoint(s + 65);
//         j = key[j + 1] ? (j = j + 1) : (j = 0);
//       } else {
//         newM += string[i];
//       }
//     }
//     if (this.type == "reverse") {
//       return newM.split("").reverse().join("");
//     } else if (this.type == "direct") {
//       return newM;
//     }
//   }
// }

module.exports = {
  VigenereCipheringMachine,
};
