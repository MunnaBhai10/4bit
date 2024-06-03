function rot13(str) {
    return str.replace(/[A-Z]/g,(char)=>{
      let charCode= (char.charCodeAt(0)-65+13)%26 +65
      return String.fromCharCode(charCode);
    })
  }
  
  console.log(rot13("SERR PBQR PNZC"));