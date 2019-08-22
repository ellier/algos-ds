const isPalindrome = (str) => {
  return str === str.split('').reverse().join('');
};

const isPalindromeRecursive = (string) => {
  let upperCaseString = string.toUpperCase();
  if (upperCaseString.length <= 1){
    return true;
  }
  if (upperCaseString[0] === upperCaseString[--upperCaseString.length]){
    return isPalindromeRecursive(upperCaseString.slice(1, --upperCaseString.length));
  } else {
      return false;
  }
};
