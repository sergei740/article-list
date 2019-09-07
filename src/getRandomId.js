const getRandomId = length => {
  let result = '';
  let symbols = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const symbolsLength = symbols.length;

  for(let i = 0; i < length; i++) {
    result = result + symbols.charAt(Math.floor(Math.random()*symbolsLength));
  }

  return result;
};

export default getRandomId;
