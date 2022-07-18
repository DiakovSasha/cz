// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const markUp = document.querySelector('.game');
// for (let i = 0; i < 9; i += 1) {
//   markUp.innerHTML += '<div class="block"></div>';
// }
// let step = 0;
// markUp.addEventListener('click', onCLick);
// function onCLick(event) {
//   if (event.target.className === 'block') {
//     if (step % 2 === 0) {
//       event.target.innerHTML = 'x';
//     } else {
//       event.target.innerHTML = '0';
//     }
//   }
//   step += 1;
//   checkWinner();
// }
// function checkWinner() {
//   const allBlock = document.querySelectorAll('.block');
//   console.log(allBlock);
//   if (
//     allBlock[0].innerHTML === 'x' &&
//     allBlock[1].innerHTML === 'x' &&
//     allBlock[2].innerHTML === 'x'
//   )
//     Notify.success('Cross Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });

//   if (
//     allBlock[3].innerHTML === 'x' &&
//     allBlock[4].innerHTML === 'x' &&
//     allBlock[5].innerHTML === 'x'
//   )
//     Notify.success('Cross Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[6].innerHTML === 'x' &&
//     allBlock[7].innerHTML === 'x' &&
//     allBlock[8].innerHTML === 'x'
//   )
//     Notify.success('Cross Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[0].innerHTML === 'x' &&
//     allBlock[3].innerHTML === 'x' &&
//     allBlock[6].innerHTML === 'x'
//   )
//     Notify.success('Cross Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[1].innerHTML === 'x' &&
//     allBlock[4].innerHTML === 'x' &&
//     allBlock[7].innerHTML === 'x'
//   )
//     Notify.success('Cross Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[2].innerHTML === 'x' &&
//     allBlock[5].innerHTML === 'x' &&
//     allBlock[8].innerHTML === 'x'
//   )
//     Notify.success('Cross Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[0].innerHTML === 'x' &&
//     allBlock[4].innerHTML === 'x' &&
//     allBlock[8].innerHTML === 'x'
//   )
//     Notify.success('Cross Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[2].innerHTML === 'x' &&
//     allBlock[4].innerHTML === 'x' &&
//     allBlock[6].innerHTML === 'x'
//   )
//     Notify.success('Cross Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   // ===========0
//   if (
//     allBlock[0].innerHTML === '0' &&
//     allBlock[1].innerHTML === '0' &&
//     allBlock[2].innerHTML === '0'
//   )
//     Notify.success('Zerro Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[3].innerHTML === '0' &&
//     allBlock[4].innerHTML === '0' &&
//     allBlock[5].innerHTML === '0'
//   )
//     Notify.success('Zerro Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[6].innerHTML === '0' &&
//     allBlock[7].innerHTML === '0' &&
//     allBlock[8].innerHTML === '0'
//   )
//     Notify.success('Zerro Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[0].innerHTML === '0' &&
//     allBlock[3].innerHTML === '0' &&
//     allBlock[6].innerHTML === '0'
//   )
//     Notify.success('Zerro Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[1].innerHTML === '0' &&
//     allBlock[4].innerHTML === '0' &&
//     allBlock[7].innerHTML === '0'
//   )
//     Notify.success('Zerro Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[2].innerHTML === '0' &&
//     allBlock[5].innerHTML === '0' &&
//     allBlock[8].innerHTML === '0'
//   )
//     Notify.success('Zerro Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[0].innerHTML === '0' &&
//     allBlock[4].innerHTML === '0' &&
//     allBlock[8].innerHTML === '0'
//   )
//     Notify.success('Zerro Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
//   if (
//     allBlock[2].innerHTML === '0' &&
//     allBlock[4].innerHTML === '0' &&
//     allBlock[6].innerHTML === '0'
//   )
//     Notify.success('Zerro Winner', {
//       width: '500px',
//       fontSize: '28px',
//     });
// }
// ======================================================================================================================================

// const message = 'JaVaScRpt это интересно';
// invertedString = '';
// // console.log(message.split(''));
// for (const character of message) {
//   invertedString +=
//     character === character.toLowerCase()
//       ? character.toUpperCase()
//       : character.toLowerCase();
// }

// console.log(invertedString.split(' '));
// const slugify = title => title.toLowerCase().split(' ').join('-');

// console.log(slugify('Arrays for begginers'));
// // console.log(slugify('English for developer'));
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 1; i <= number; i += 1) {
//     total += i;
//     console.log(i);
//   }

//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// function findLongestWord(string) {
//   // Change code below this line
//   let longestWord = '';
//   let stringDelimeter = string.split(' ');
//   console.log(stringDelimeter);
//   for (let i = 0; i < stringDelimeter.length; i += 1) {
//     console.log(stringDelimeter[i]);
//     if (longestWord.length < stringDelimeter[i].length) {
//       return longestWord;
//     }
//   }
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));
// console.log(findLongestWord());
// ================================================================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// ===================================================================================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArr = [];
//   for (const number of numbers) {

//     if (number > value) {
//       newArr.push(number);
//     }
//   }
//   return newArr;

//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// =========================================================================================
// function getCommonElements(array1, array2) {
//   const newArr = [];
//   // Change code below this line
//   for (const arr of array1) {
//     console.log(arr);
//     if (array2.includes(arr)) {
//       newArr.push(arr);
//     }
//   }
//   return newArr;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// =============================================================================================
// 2 вариант !
// function getCommonElements(array1, array2) {
//   const newArr = [];

//   // Change code below this line
//   for (let i = 0; i < array2.length; i += 1) {
//     console.log(array2[i]);
//     console.log(array1[i]);
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;

//   // Change code above this line
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// ====================================================================================================

const a = []

console.log(a);

const b = Date.now()//?
console.log(b);
Date