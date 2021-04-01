function LetterChanges(str) {
    let letters1 = "abcdefghijklmnopqrstuvwxyz";
    let letters2 = "bcdEfghIjklmnOpqrstUvwxyzA";
    return str.split('').map((char, x) => letters2[letters1.indexOf(char)] || char).join('');
  }
  console.log(LetterChanges("hello*3"))//Ifmmp*3
  console.log(LetterChanges("fun times!"))//gv0 Ujnft!
  