let btn = document.getElementById("submit-btn");
let outer = document.querySelector("#table-data");
let titleTable = document.getElementById("title-table");

let firstNumber;
let secondNumber;

btn.addEventListener("click", () => {
  firstNumber = Number(document.getElementById("numberFirst").value);
  secondNumber = Number(document.getElementById("numberSecond").value);

  printTable(firstNumber, secondNumber);
  titleTable.innerHTML = "";

  titleTable.innerHTML += `Table for the numbers between ${firstNumber} and ${secondNumber}`;
});

// Function to print the table

function printTable(x, y) {
  outer.innerHTML = "";
  for (i = 1; i <= y; i++) {
    const result = i * x;
    outer.innerHTML += `${x} * ${i} = ${result} <br>`;

    console.log(`${x} * ${i} = ${result}`);
  }

  outer.innerHTML += "<br>";
}
