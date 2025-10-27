// Функция генерации случайного числа в заданном диапазоне
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Функция выбора случайной математической операции
function getRandomFromArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Функция принимает строку и возвращает перевернутую строку
function getInvertedText(str) {
  return str.split("").reverse().join("");
}

document.getElementById("gameSecretNumber").addEventListener("click", function (gameSecretNumber) {
  const MIN_NUMBER = 1; // Минимальное число
  const MAX_NUMBER = 100; // Максимальное число
  let hint; // Подсказака
  let attempt = 5; // Количество попыток
  let secretNumber = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
  console.log(`secretNumber: ${secretNumber}`); // Для проверки работы программы

  let userInput = prompt(`Введите число от ${MIN_NUMBER} до ${MAX_NUMBER}`);

  while (attempt) {
    if (userInput == null) {
      alert("Попробуем в другой раз!");
      break;
    }

    userInput = +userInput;

    if (!isNaN(userInput) && userInput >= MIN_NUMBER && userInput <= MAX_NUMBER) {
      if (userInput === secretNumber) {
        alert("Поздравляем! Вы угадали число!");
        break;
      } else {
        attempt--;
        if (attempt) {
          hint = secretNumber > userInput ? "Загаданное число больше" : "загаданное число меньше";
          userInput = prompt(`${hint}. Осталось попыток: ${attempt}`);
        } else {
          alert(`Попытки закончились! Загаданное число было: ${secretNumber}`);
        }
      }
    } else {
      userInput = prompt(`Ошибка: Введите число от ${MIN_NUMBER} до ${MAX_NUMBER}`);
    }
  }
});

document.getElementById("simpleArithmetic").addEventListener("click", function (simpleArithmetic) {
  const MIN_NUMBER = 1; // Минимальное число
  const MAX_NUMBER = 10; // Максимальное число
  const OPERATIONS_LIST = ["+", "-", "*", "/"];

  function getRandomFromArr(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function tasker() {
    let num1 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    let num2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER);
    let oper = getRandomFromArr(OPERATIONS_LIST);

    // Добавляем проверку для корректного деления
    if (oper === "/" && num2 === 0) {
      num2 = getRandomNumber(MIN_NUMBER, MAX_NUMBER); // Перегенерируем делитель
    }

    let task;
    let answer;

    console.log(`num1 - ${num1} oper - ${oper} num2 - ${num2}`);

    switch (oper) {
      case "+":
        task = `${num1} ${oper} ${num2} = ...`;
        answer = num1 + num2;
        break;
      case "-":
        task = `${num1} ${oper} ${num2} = ...`;
        answer = num1 - num2;
        break;
      case "*":
        task = `${num1} ${oper} ${num2} = ...`;
        answer = num1 * num2;
        break;
      case "/":
        task = `${num1} ${oper} ${num2} = ...`;
        answer = num1 / num2;
        break;
      default:
        return { task: "Ошибка", answer: "Неизвестная операция" };
    }

    return { task, answer };
  }

  while (true) {
    let { task, answer } = tasker();
    let userInput = prompt(`Решите пример: \n${task}`);

    if (userInput == null) {
      alert("Попробуем в другой раз!");
      break;
    } else if (!isNaN(userInput) && userInput == ~~answer && userInput !== "") {
      userInput = alert(`Верно, правильный ответ ${~~answer}`);
    } else {
      userInput = alert(`Неверно, правильный ответ ${~~answer}`);
    }
  }
});

document.getElementById("textInverted").addEventListener("click", function (textInverted) {
  let inputTextUser;

  while (true) {
    inputTextUser = prompt("Введите текст...");
    if (inputTextUser == null) {
      alert("Попробуем в другой раз!");
      break;
    } else {
      alert(getInvertedText(inputTextUser));
    }
  }
});

document.getElementById("simpleQuiz").addEventListener("click", function (simpleQuiz) {
  let answerCount = 0;
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2, // номер правильного ответа
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2,
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2,
    },
  ];

  for (_ of quiz) {
    question = _.question;
    options = _.options.map((options) => `\n${options}`);
    correctAnswer = _.correctAnswer;
    answer = Number(prompt(`Вопрос: ${question}\n\Выберите ответ: ${options}`));
    if (answer === correctAnswer) {
      answerCount++;
    }
  }

  alert(`Привильных ответов: ${answerCount} из ${quiz.length}`);
});

function getRandomFromArr(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

document.getElementById("TsuEFa").addEventListener("click", function () {
  const ITEMS_LIST = ["камень", "ножницы", "бумага"];

  const list = ITEMS_LIST.map((item, index) => `${index + 1}. ${item}`).join("\n");

  while (true) {
    const inputTextUser = prompt(`Выберите вариант:\n\n${list}\n\nВведите номер вашего выбора`);

    if (inputTextUser === null) {
      alert("Попробуем в другой раз!");
      return;
    }

    const userChoice = Number(inputTextUser);

    if (isNaN(userChoice) || userChoice < 1 || userChoice > ITEMS_LIST.length) {
      alert("Неверный ввод! Пожалуйста, выберите число от 1 до " + ITEMS_LIST.length);
      return;
    }

    const user = ITEMS_LIST[userChoice - 1];
    const ai = getRandomFromArr(ITEMS_LIST);

    if (user === ai) {
      alert(`Ничья!\nВы выбрали: ${user}\nКомпьютер выбрал: ${ai}`);
    } else if (
      (user === "камень" && ai === "ножницы") ||
      (user === "ножницы" && ai === "бумага") ||
      (user === "бумага" && ai === "камень")
    ) {
      alert(`Победа!\nВы выбрали: ${user}\nКомпьютер выбрал: ${ai}`);
    } else {
      alert(`Поражение!\nВы выбрали: ${user}\nКомпьютер выбрал: ${ai}`);
    }
  }
});
