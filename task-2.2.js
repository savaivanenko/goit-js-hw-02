const calculateEngravingPrice = function (massege, pricePerWord){
const price = (massege.split(' ')).length * pricePerWord;
console.log(price);}

calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus', 10);  // 80

calculateEngravingPrice(
  'Proin sociis natoque et magnis parturient montes mus', 20); // 160

calculateEngravingPrice(
  'Donec orci lectus aliquam est magnis', 40); // 240


calculateEngravingPrice(
  'Donec orci lectus aliquam est magnis', 20); // 120