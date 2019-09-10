const getRandomNumb = () => {
  let arr = [0];
  for (let i = 1; i < 22; i++) {
    arr.push(arr[i - 1] + 20);
  }
  return arr[Math.floor(Math.random() * (22 - 0 + 1)) + 0];
};

export default getRandomNumb;