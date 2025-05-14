/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let result = '';       // сюда будем собирать итоговую строку
  let newWord = true;    // флаг: находимся ли мы в начале нового слова

  for (let i = 0; i < str.length; i++) {  // перебираем каждый символ строки
    let char = str[i];                    // текущий символ

    if (char === ' ') {                   // если это пробел
      result += char;                     // просто добавляем его в результат
      newWord = true;                     // следующий символ — начало нового слова
    } else {
      if (newWord) {                      // если начало нового слова
        result += char.toUpperCase();     // делаем символ заглавным и добавляем
        newWord = false;                  // мы больше не в начале слова
      } else {
        result += char;                   // если это не начало слова — добавляем как есть
      }
    }
  }
  return result;  // возвращаем итоговую строку
}



// function capitalizeWords(str) {
//   let result = '';       // сюда будем собирать итоговую строку
//   let word = '';         // временная переменная для текущего слова

//   for (let i = 0; i < str.length; i++) {  // перебираем каждый символ строки
//     let char = str[i];                    // текущий символ

//     if (char === ' ' || i === str.length - 1) {  // если это пробел или последний символ
//       if (i === str.length - 1 && char !== ' ') {
//         word += char;                    // добавляем последний символ, если не пробел
//       }

//       if (word.toLowerCase() === 'javascript') { // если слово — "javascript"
//         result += 'JavaScript';                 // добавляем в результат "JavaScript"
//       } else if (word.length > 0) {             // если слово не пустое
//         result += word[0].toUpperCase();        // первую букву — в верхний регистр
//         for (let j = 1; j < word.length; j++) { // остальные буквы — как есть
//           result += word[j];
//         }
//       }

//       if (char === ' ') result += ' '; // если текущий символ — пробел, добавляем его
//       word = '';                       // очищаем текущее слово
//     } else {
//       word += char; // если не пробел — добавляем символ в текущее слово
//     }
//   }

//   return result; // возвращаем финальный результат
// }

console.log(capitalizeWords("hello world from javascript"));
