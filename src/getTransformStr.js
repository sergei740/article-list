const getTransformStr = str => {
  const transformStr = str.includes(' ')
    ? str.replace(/ /g, '%20')
    : str;
  return transformStr;
};

export default getTransformStr;