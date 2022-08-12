const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeNumberInMorse(expr) {
    let decode = [];
  
    for (let i = 0; i < expr.length; i += 10) {
      const strTen = expr.substr(i, 10);
      let firstStr = '';
  
      for (let t = 0; t < strTen.length; t += 2) {
        const secondStr = strTen.substr(t, 2);
  
        switch (secondStr) {
          case "10":
              firstStr = firstStr + '.';
            break;
          case "11":
              firstStr = firstStr + '-';
            break;
          case "**":
              firstStr = '*';
            break;
        }
      }
      
      decode.push(firstStr);
    }
    return decode;
  }
  
  function decodeMorseInReadable(morse)
  {
      return morse.map(item => item === "*" ? " " : MORSE_TABLE[item]).join("");
  }
  
  function decode(expr) {
    const getMorseText = decodeNumberInMorse(expr);
    const resultText = decodeMorseInReadable(getMorseText);
    return resultText;
  }
    
  module.exports = {
    decode,
  };