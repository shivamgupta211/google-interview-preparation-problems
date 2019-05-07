// https://leetcode.com/problems/add-strings/description/

// ****************************** My Solution ******************************
var addStrings = function (num1, num2) {
    return String(strToNumber(num1) + strToNumber(num2));
};

function strToNumber(num) {
    let sum = 0;
    for (var i = num.length - 1; i >= 0; i--) {
        sum += (num.charAt(num.length - i - 1).charCodeAt() - "0".charCodeAt()) * Math.pow(10, i);
    }
    return sum;
}

// ****************************** Previous Solution ******************************
const add = (s, t) => {
  const w = Math.max(s.length, t.length);
  s = s.padStart(w, '0');
  t = t.padStart(w, '0');
  let c = 0;
  let res = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    const current = parseInt(s[i], 10) + parseInt(t[i], 10) + c;
    if (i === 0) {
      res = current + res;
    } else {
      const dig = current % 10;
      c = Math.floor(current / 10);
      res = dig + res;
    }
  }
  return res;
};

//9739
//0019

console.log(add('9789', '19'));
