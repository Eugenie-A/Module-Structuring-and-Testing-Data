function isValidCreditCard(card) {
  // Check: must be string, exactly 16 chars, only digits
  if (typeof card !== 'string' || card.length !== 16 || !/^\d{16}$/.test(card)) {
    return false; // Fail immediately if format is wrong
  }

  // Convert string to array of numbers (0-9)
  const digits = [...card].map(Number);

  // Check that not all digits the same
  if (new Set(digits).size === 1) return false;

  // Check if the last digit is even
  if (digits[15] % 2 !== 0) return false;

  // Calculate the sum of all 16 digits
  const sum = digits.reduce((a, b) => a + b, 0);
  // Sum must be greater than 16
  return sum > 16;
}

console.log(isValidCreditCard("a92332119c011112")); // false
console.log(isValidCreditCard("4444444444444444")); // false
console.log(isValidCreditCard("1111111111111110")); // false
console.log(isValidCreditCard("6666666666666661")); // false
console.log(isValidCreditCard("6666666666661666")); // true
console.log(isValidCreditCard("9999777788880000")); // true