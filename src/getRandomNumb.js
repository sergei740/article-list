const getRandomNumb = () => {
  let arr = [0];
  for (let i = 1; i < 15; i++) {
    arr.push(arr[i - 1] + 30);
  }
  return arr[Math.floor(Math.random() * (14 - 0 + 1)) + 0];
};

export default getRandomNumb;