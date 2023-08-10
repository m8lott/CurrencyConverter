function tryConvert (input,base,target) {
  if (base == target) {
    return input;
  }
  let transfer = input * base;
return  Math.ceil((transfer / target) * 100) / 100;
}

export default tryConvert;