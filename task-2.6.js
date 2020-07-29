let input;
const numbers = [];
let total = 0;

do{
  input = prompt('Введите число');
  
    if (isFinite(input)){
      console.log(input);
      numbers.push(input);
    }
    
    else {alert('Введите число')}
}
while (input !== null);

for (let number of numbers) {
  total += +number;
}
console.log(total);