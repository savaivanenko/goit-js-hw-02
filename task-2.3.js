const findLongestWord = function(string) {
  const arr = string.split(' ');
  let longest = arr[0].length;
  let longestWord;
    for (let i = 0; i < arr.length; i +=1){
      if (longest <= arr[i].length){
        longest = arr[i].length;
        longestWord = arr[i];
      }   
    }
    console.log(longestWord);
  }
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
findLongestWord('The quick brown fox jumped over the lazy dog'); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'