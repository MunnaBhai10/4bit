function telephoneCheck(str) {
    const valid = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?(\d{3})(\s|-)?(\d{4})$/;
    return valid.test(str);
  }
  
  console.log(telephoneCheck("1 (555) 555-5555"));