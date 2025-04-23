function isPalindrome(word) {
    if (!word) return true; // considérer vide comme palindrome
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = isPalindrome;
