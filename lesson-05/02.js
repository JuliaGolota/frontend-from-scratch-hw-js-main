/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(gallery, key, newValue) {
   gallery[key] = newValue   //Если в gallery уже есть ключ key, то его значение обновляется.

  // Если ключа нет, он создаётся, и в gallery появляется новая пара ключ: значение.
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)


// Вариант 1: с hasOwnProperty

// function updateGallery(gallery, key, newValue) {
//   if (gallery.hasOwnProperty(key)) {
//     // ключ уже есть — обновляем
//     gallery[key] = newValue;
//   } else {
//     // ключа нет — добавляем
//     gallery[key] = newValue;
//   }
// }

// Вариант 2: с in

// function updateGallery(gallery, key, newValue) {
//   if (key in gallery) {
//     // ключ уже есть
//     gallery[key] = newValue;
//   } else {
//     // ключа нет
//     gallery[key] = newValue;
//   }
// }

// key in gallery проверяет, есть ли такой ключ включая унаследованные свойства, а hasOwnProperty — только в самом объекте.

// Вариант 3: с for...in



