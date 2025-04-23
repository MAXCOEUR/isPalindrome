const isPalindrome = require('./isPalindrome');

describe('isPalindrome', () => {
  test('doit retourner true pour un palindrome simple', () => {
    expect(isPalindrome('radar')).toBe(true);
  });

  test('doit retourner false pour un mot non palindrome', () => {
    expect(isPalindrome('bonjour')).toBe(false);
  });

  test('doit retourner true pour une chaîne vide', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('ignore la casse et les caractères spéciaux', () => {
    expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
  });
});
