// Get the phone number input field
const phoneNumberInput = document.getElementById('phoneNumber');

// List of valid Malaysian mobile prefixes
const validPrefixes = ['010', '011', '012', '013', '014', '015', '016', '017', '018', '019'];

// Function to append a number to the phone number display
function appendNumber(num) {
  const enteredNumber = phoneNumberInput.value;

  // Limit the number of digits to 11
  if (enteredNumber.length < 11) {
    if (enteredNumber.length < 3) {
      // Append number without checking the prefix for the first 3 digits
      phoneNumberInput.value += num;
    } else {
      // Check for a valid Malaysian phone number prefix (after 3 digits)
      const prefix = enteredNumber.substring(0, 3);

      // If it's a valid prefix, continue appending
      if (validPrefixes.includes(prefix)) {
        phoneNumberInput.value += num;
      }
    }
  }
}

// Function to delete the last entered digit
function deleteLast() {
  phoneNumberInput.value = phoneNumberInput.value.slice(0, -1);
}

// Function to clear all the entered digits
function clearAll() {
  phoneNumberInput.value = '';
}