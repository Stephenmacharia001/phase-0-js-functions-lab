// 1: calculateTax
function calculateTax(amount) {
    return amount * 0.10;
}

// 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// 3: findMaximum
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// 4: isPalindrome
function isPalindrome(word) {
    // Standardize text case and remove non-alphanumeric spacing if testing sentences
    const cleanWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedWord = cleanWord.split('').reverse().join('');
    return cleanWord === reversedWord;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };