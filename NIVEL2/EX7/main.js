const num1 = parseInt(prompt("Enter an integer between 1 and 10: "));

// take range input from the user
const num2 = parseInt(prompt("Enter a range between 1 and 10: "));

const multiplyTable = () => {
  for (let i = 1; i <= num2; i++) {
    const result = i * num1;
    console.log(`${num1} * ${i} = ${result}`);
  }
};

multiplyTable(num1, num2);
