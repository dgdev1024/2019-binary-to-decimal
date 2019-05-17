const binaryInput = document.getElementById('binary-input');
const answerOutput = document.getElementById('answer');
const errorOutput = document.getElementById('error');

const clearOutput = () => {
  errorOutput.innerHTML = '';
  answerOutput.innerHTML = '';

  errorOutput.style.display = 'none';
  answerOutput.style.display = 'none';
};

const raiseError = str => {
  errorOutput.innerHTML = str;
  errorOutput.style.display = 'block';
};

const printAnswer = answer => {
  answerOutput.innerHTML = `= ${answer}`;
  answerOutput.style.display = 'block';
};

const onSubmit = e => {
  // Prevent refresh on submit.
  e.preventDefault();

  // Clear previous error.
  clearOutput();

  // Get the input. Make sure enough digits were entered.
  const digits = binaryInput.value;
  if (digits.length === 0) {
    return raiseError('Please enter some binary digits.');
  }
  if (digits.length > 8) {
    return raiseError('A maximum of 8 digits may be entered.');
  }

  // Iterate through each digit and calculate our decimal equivalent.
  let result = 0;
  for (const digit of digits) {
    // Make sure the user entered 0 or 1 for each digit.
    if (digit !== '0' && digit !== '1') {
      return raiseError('Only binary digits (0 and 1) may be entered.');
    }

    // Calculate the decimal equivalent of the digit and add that to our
    // result.
    result = result * 2 + parseInt(digit);
  }

  // Print the final answer.
  printAnswer(result);
};
