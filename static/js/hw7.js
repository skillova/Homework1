// Задание 1
// Преобразовать строку 'js' в верхний регистр.
const str1 = "js";
str1Upp = str1.toLocaleUpperCase();
console.log(`${str1Upp}`);

// Задание 2
// Создать функцию, которая принимает массив строк и строку.
// Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки.
// Регистр символов не влияет на результат.
function filterStringsByPrefix(arr, prefix) {
  return arr.filter((el) => el.toLowerCase().startsWith(prefix.toLowerCase()));
}

const arr2 = new Array(
  "Apple",
  "apricot",
  "Banana",
  "berry",
  "avocado",
  "Almond",
  "cherry"
);
console.log(`${filterStringsByPrefix(arr2, "av")}`);

// Задание 3
// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.
const num3 = 32.58884;
console.log(
  `До меньшего: ${Math.floor(num3)} До большего: ${Math.ceil(
    num3
  )} До ближайшего: ${Math.round(num3)}`
);

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
const arr4 = new Array(52, 53, 49, 77, 21, 32);
console.log(
  `минимальное: ${Math.min(...arr4)} максимальное: ${Math.max(...arr4)}`
);

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.
function randomNum(min=1, max=10) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`${randomNum()}`);

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
// Длина массива должна быть в два раза меньше переданного числа.
function arrRandom(num) {
  return new Array(Math.floor(num / 2)).fill().map(() => randomNum(0, num));
}
console.log(`${arrRandom(20)}`);

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
console.log(`${randomNum(1, 100)}`);

// Задание 8
// Вывести в консоль текущую дату.
let currentDate = new Date();
console.log(`${currentDate}`)

// Задание 9
// Создать переменную currentDate, хранящую текущую дату. 
// Вывести дату, которая наступит через 73 дня после текущей.
let futureDate = new Date(new Date().setDate(new Date().getDate() + 73)).toLocaleDateString();
console.log(`${futureDate}`)

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]
const monthsOfYear = [
  'января', 'февраля', 'марта', 'апреля', 
  'мая', 'июня', 'июля', 'августа', 
  'сентября', 'октября', 'ноября', 'декабря'
];

const daysOfWeek = [
   'воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 
  'пятница', 'суббота'
];

function formatDate(date) {
  // Получаем компоненты даты
  const day = date.getDate();
  const month = monthsOfYear[date.getMonth()];
  const year = date.getFullYear();
  const dayOfWeek = daysOfWeek[date.getDay()];
  
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  // Форматируем строку
  const dateString = `Дата: ${day} ${month} ${year} — это ${dayOfWeek}`;
  const timeString = `Время: ${hours}:${minutes}:${seconds}`;
  
  return `${dateString}\n${timeString}`};


  console.log(formatDate(new Date))


