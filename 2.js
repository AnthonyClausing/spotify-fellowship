function decodeString(s) {
  let output = '';
  let curNum = 0;
  let strStack = []; // stacks to keep track current String 
  let numStack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '[') {
      strStack.push(output);
      numStack.push(curNum);
      output = '';
      curNum = 0;
    } else if (s[i] === ']') {
      const num = numStack.pop();
      const prevStr = strStack.pop();
      output = prevStr + output.repeat(num);
    } else if (parseInt(s[i]) && !isNaN(s[i])) {
      // if element is a number
      curNum += Number(s[i]);
    } else {
      output += s[i];
    }
  }
  return output;
}