const checkForSpam = function(message) {
  const messege = message.toLowerCase();
  if (messege.includes('sale') || messege.includes('spam')){
    console.log(`${messege} -> true`);}
  else {
    console.log(`${messege} -> false`);}
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// вариант - 2(правда не отработал в последнем предложении с [])
 // const arrMessege = (message.toLowerCase()).split(' ');
  //   console.log(arrMessege);
  // for (let i = 0; i < arrMessege.length; i+=1 ){
  //   let word = arrMessege[i];
  //   if (word ==='sale' || word === 'spam'){
  //     return true;
  //   }
  // return false;
  // }
