const increment = (n) => {
  return ++n;
};

const log = (word) => {
  console.log(word);
}

const isString = (data) => {
  if (typeof data === 'string') {
    return true;
  }
  return false;
};

const myEach = (arr, cb) => {
  for (i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

const myMap = (arr, cb) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
};

const myFilter = (arr, cb) => {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

const myReduce = (iterable, reduceFn, accumulator) => {
  for (i of iterable) {
    accumulator = reduceFn(accumulator, i);
  }
  return accumulator;
};


