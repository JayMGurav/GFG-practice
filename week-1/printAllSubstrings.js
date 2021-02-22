function subString(s) {
  const n = s.length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      // console.log(s.substr(i, j)); 
      let str = "";
      for (let k = i; k < i+j; k++) {
        str+=s[k];        
      }
      console.log(str);
    }    
  }
}

subString('abc');