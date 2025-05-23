/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый 
символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

// 1. вариант с массивом
function doubleEachCharacter(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        newStr.push(str[i] + str[i]);     
    }
return newStr.join('');
}

console.log(doubleEachCharacter('hello'));

// 2. вариант без массива
// function doubleEachCharacter(str) {
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         newStr += str[i] + str[i];
//     }
//     return newStr;
// }

