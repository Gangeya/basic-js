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
  constructor(flag = true) {
    this.typemachine = flag;
  }
  encrypt(message, key) {
    if (arguments.length === 0) {
      throw new Error("Incorrect arguments!");
    }
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let text = message.toUpperCase();
    key = key.toUpperCase();
    //console.log(text.toUpperCase());
    let koef = Math.ceil(text.length / key.length);
    key = key.repeat(koef);

    let codeA = "A".charCodeAt(0);
    let abcCount = 26;

    let result = [];
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        text[i].charCodeAt() < 65 ||
        (text[i].charCodeAt() > 90 && text[i].charCodeAt() < 97) ||
        text[i].charCodeAt() > 122 ||
        text[i] === " "
      ) {
        result.push(text[i]);
        j--;
      } else {
        let letterIndex = text.charCodeAt(i) - codeA;

        let shift = key.charCodeAt(j) - codeA;
        result.push(
          String.fromCharCode(codeA + ((letterIndex + shift) % abcCount))
        );
      }
      j++;
    }

    if (this.typemachine === false) {
      return result.reverse().join("");
    }

    return result.join("");
  }

  decrypt(message, key) {
    if (arguments.length === 0) {
      throw new Error("Incorrect arguments!");
    }
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let text = message.toUpperCase();
    key = key.toUpperCase();
    //console.log(text.toUpperCase());
    let koef = Math.ceil(text.length / key.length);
    key = key.repeat(koef);

    let codeA = "A".charCodeAt(0);
    let abcCount = 26;

    let result = [];
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (
        text[i].charCodeAt() < 65 ||
        (text[i].charCodeAt() > 90 && text[i].charCodeAt() < 97) ||
        text[i].charCodeAt() > 122 ||
        text[i] === " "
      ) {
        result.push(text[i]);
        j--;
      } else {
        let letterIndex = text.charCodeAt(i) - codeA;

        let shift = key.charCodeAt(j) - codeA;
        result.push(
          String.fromCharCode(
            codeA + ((letterIndex - shift + abcCount) % abcCount)
          )
        );
      }
      j++;
    }

    if (this.typemachine === false) {
      return result.reverse().join("");
    }

    return result.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
