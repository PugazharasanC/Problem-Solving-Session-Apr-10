//? Day 3: Strings & String Manipulation
//* Session Focus: String traversal and manipulation techniques.
//? Session Practice Questions:
//! Reverse a string (multiple methods)

function reverseStr(str = "") {
  //   let reversed = [];
  //   for (let char of str) {
  //     reversed.unshift(char);
  //   }
  //   return reversed.join("");

  // const arr = str.split("")
  // let reversed = ''
  // // for (let ind = arr.length - 1; ind >= 0; ind--){
  // //     reversed += arr[ind]
  // // }
  // // while(arr.length){
  // //     reversed += arr.pop()
  // // }
  // console.log(reversed)

  const arr = str.split("");
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }
  console.log(arr.join(""));
}
// reverseStr("PugazharasanC");

function reverse(str) {
  if (str.length < 2) return str;
  return reverse(str.slice(1)) + str[0];
}
// console.log(reverse("PugazharasanC"));
// function checkEmail(email) {
//   if (email.includes(" ")) {
//     return false;
//   }
//   email = email.split("@");
//   if (email.length == 2) {
//     let email1 = email[1].split(".");
//     if (email1.length >= 2) {
//       if (email1.pop().length >= 2) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
// console.log(checkEmail("pugazh@arasan@guvi.edu.in"));

// TN-48-AM-4145 => 4 + 8 + 4 + 1 + 4 + 5 => 26
// function getState(stateCode = ""){
//     switch(stateCode){
//         case "TN": return "Tamilnadu";
//         case "AP" : return "Andrapradesh"
//         case "KL": return "Kerala"
//         case "KA": return "Karnataka"
//         case "MH" : return "Maharashtra"
//         case "DL": return "Delhi"
//         default: return 0;
//     }
// }
// function getRegion(code, state){
//     if(state == 'Tamilnadu' && code == 48){
//         return 'Srirangam, Trichy'
//     }
//     return "Invalid"
// }
// function checkVahan(vahanNo = "") {
//     const vahan = vahanNo.split('-')
//     if (vahan.length != 4) return false;
//     const state = getState(vahan[0])
//     const region = getRegion(vahan[1], state);
//     let sum = 0;
//     for (let val of vahanNo) {
//         sum += Number(val) || 0
//     }
//     console.log(sum)
//     const date = new Date();
//     return checkPermisson(sum, date)
// }
// checkVahan("TN-48-AM-4145")

// IFSC CODE => SBIN0003245 => SBIN => SBI
// IFSC CODE => IOBA0005143 => IOBA => IOB

// P01A

// ABCDE1234P

//! Count occurrences of each character in a string
// function countOccurences(str = "") {
//     const freq = {};
//     for (let char of str) { // for of loop
//         freq[char] = (freq[char] || 0) + 1;
//     }
//     console.log(freq)
// }

// usnig reduce method
function countOccurences(str = "") {
  return str.split("").reduce((accum, val) => {
    accum[val] = (accum[val] || 0) + 1;
    return accum;
  }, {});
}
// console.log(countOccurences("Problem Solving Session JS"));
//! Convert a string to lowercase/uppercase without built-in functions
function toLowerCase(str = "") {
  function equalLowerCase(char = "") {
    switch (char) {
      case "A":
        return "a";
      case "B":
        return "b";
      case "C":
        return "c";
      case "D":
        return "d";
      case "E":
        return "e";
      case "F":
        return "f";
      case "G":
        return "g";
      case "H":
        return "h";
      case "I":
        return "i";
      case "J":
        return "j";
      case "K":
        return "k";
      case "L":
        return "l";
      case "M":
        return "m";
      case "N":
        return "n";
      case "O":
        return "o";
      case "P":
        return "p";
      case "Q":
        return "q";
      case "R":
        return "r";
      case "S":
        return "s";
      case "T":
        return "t";
      case "U":
        return "u";
      case "V":
        return "v";
      case "W":
        return "w";
      case "X":
        return "x";
      case "Y":
        return "y";
      case "Z":
        return "z";
      default:
        return char;
    }
  }
  let lowerCase = "";
  for (let char of str) {
    lowerCase += equalLowerCase(char);
  }
  return lowerCase;
}
// console.log(
//     toLowerCase("THIS IS PROBLEM solving SESSion 101, email :- problem@solving.session")
// )
function toUpperCase(str = "") {
  function equalUpperCase(char = "") {
    const obj = {
      a: "A",
      b: "B",
      c: "C",
      d: "D",
      e: "E",
      f: "F",
      g: "G",
      h: "H",
      i: "I",
      j: "J",
      k: "K",
      l: "L",
      m: "M",
      n: "N",
      o: "O",
      p: "P",
      q: "Q",
      r: "R",
      s: "S",
      t: "T",
      u: "U",
      v: "V",
      w: "W",
      x: "X",
      y: "Y",
      z: "Z",
    };
    return obj[char] || char;
  }
  let upperCase = "";
  for (let char of str) {
    upperCase += equalUpperCase(char);
  }
  return upperCase;
}
console.log(
  toUpperCase(
    "THIS IS PROBLEM solving SESSion 101, email :- problem@solving.session"
  )
);
//! Find the longest word in a sentence
function longestWord(str = "") {
  const words = str.split(" ");
  let longestInd = 0;
  for (let ind = 1; ind < words.length; ind++) {
    if (words[ind].length >= words[longestInd].length) {
      longestInd = ind;
    }
  }
  return words[longestInd];
}
// console.log(longestWord("This is a problem solving session 101"))
//! Check if a string is a palindrome
// ? palindrome song
// ? what is palindrome? => A word, phrase, number, or other sequence of characters that reads the same backward as forward

// 12321 => 12321
// madam => madam
// malayalam => malayalam
// mom, dad, pop, racecar, eye, deed, level, noon, wow, radar, refer, repaper, rotator, rotor, kayak, peep,

// two pointers algo
function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
  //   return str == str.split("").reverse().join("");
}

//! Remove duplicates from a string
function removeDuplicates(str = "") {
  const unique = new Set();
  let newStr = "";
  for (let char of str) {
    if (unique.has(char) && char !== " ") {
      continue;
    } else {
      unique.add(char);
      newStr += char;
    }
  }
  console.log(unique);
  return newStr;
}
// console.log(
//     removeDuplicates("This is a problem solving session 101")
// )
//! Find all substrings of a given string
function allSubstrings(str = "") {
  const substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  console.log(substrings);
}
console.log(allSubstrings("string"))
// todo Post-Session Practice Questions:
// todo Check if a string is an anagram of another
// todo Find the first non-repeating character in a string
// todo Remove all vowels from a string
// todo Replace spaces in a string with a specified character
// todo Validate if a string is a valid email address
// todo Count the number of words in a sentence
// todo Capitalize the first letter of each word in a sentence
// todo Compress a string (e.g., "aaabbc" to "a3b2c1")
// todo Check if one string is a rotation of another
// todo Find the longest palindromic substring
