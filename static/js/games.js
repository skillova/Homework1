document.getElementById("gameSecretNumber").addEventListener("click", function (gameSecretNumber) {
  const MIN_NUMBER = 1; // Минимальное число
  const MAX_NUMBER = 100; // Максимальное число
  let hint; // Подсказака
  let attempt = 5; // Количество попыток
  let secretNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER; //Генератор числа
  console.log(`secretNumber: ${secretNumber}`); // Для проверки работы программы

  let userInput = prompt(`Введите число от ${MIN_NUMBER} до ${MAX_NUMBER}`);

  // });

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
