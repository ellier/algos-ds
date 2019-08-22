const getNthFibMemo = (n, memo = {1: 0, 2: 1}) => {
  if (n in memo) {
    return memo[n];
  } else {
      memo[n] = getNthFibMemo(n - 1, memo) + getNthFibMemo(n - 2, memo);
      return memo[n];
  }
};

const getNthFibIterative = (n) => {
  let lastTwo = [0, 1];
  let counter = 3;
  while (n <= counter) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
};
