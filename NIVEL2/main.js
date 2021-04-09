const num1 = parseInt(prompt("Enter an integer: "));

// take range input from the user
const num2 = parseInt(prompt("Enter a range: "));

const multiplyTable = () => {
  for (let i = 1; i <= num2; i++) {
    const result = i * num1;
    console.log(`${num1} * ${i} = ${result}`);
  }
};

multiplyTable(num1, num2);
