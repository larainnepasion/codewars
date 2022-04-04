/* Write a function that checks if a given string (case insensitive) is a palindrome. */

function isPalindrome(string) {
    return string.toLowerCase() === string.toLowerCase().split('').reverse().join('');
  }