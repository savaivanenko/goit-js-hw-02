let input;
const numbers = [];
let total = 0;

do{
  input = prompt('Введите число');
    if (input === null) {break};
      console.log(input);
    numbers.push(input);  
      console.log(numbers);
}
while (input !== null);

for (let number of numbers) {
  total += +number;
}
console.log(total);