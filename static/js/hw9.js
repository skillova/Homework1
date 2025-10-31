const originalTextH1 = document.querySelector(".content__title").textContent;
const originalTextH2 = document.querySelector(".content__description").textContent;

document.getElementById("visibleTrigger").addEventListener("click", function () {
  const title = document.querySelector("h1");
  const button = document.getElementById("visibleTrigger");
  if (title.style.display === "none" || title.style.display === "") {
    title.style.display = "block";
    button.textContent = "Скрыть";
  } else {
    title.style.display = "none";
    button.textContent = "Показать";
  }
});

document.getElementById("colorTriggerP").addEventListener("click", function () {
  const subtitle = document.querySelector("h2");
  if (subtitle.style.color === "rgb(0, 0, 0)") {
    subtitle.style.color = "rgb(0, 0, 255)";
  } else {
    subtitle.style.color = "rgb(0, 0, 0)";
  }
});

document.getElementById("textTriggerH1").addEventListener("click", function () {
  const title = document.querySelector("h1");
  if (title.textContent === "Привет, мир!") {
    title.textContent = originalTextH1;
  } else {
    title.textContent = "Привет, мир!";
  }
});

document.getElementById("textTriggerDescription").addEventListener("click", function () {
  const items = document.querySelectorAll(".content__description");

  items.forEach((element) => {
    if (!element.dataset.original) {
      element.dataset.original = element.textContent;
    }

    if (element.textContent.startsWith("Изменённый текст")) {
      element.textContent = element.dataset.original;
    } else {
      element.textContent = `Изменённый текст`;
    }
  });
});

document.getElementById("textTriggerDescriptionOnly").addEventListener("click", function () {
  const items = document.querySelectorAll(".content__description");

  items.forEach((element) => {
    if (!element.dataset.original) {
      element.dataset.original = element.textContent;
    }

    if (element.textContent.startsWith("Новый текст")) {
      element.textContent = element.dataset.original;
    } else {
      element.textContent = `Новый текст`;
    }
  });
});


document.getElementById("newParagraph").addEventListener("click", function () {
  const newParagraph = document.createElement("p");
  const container = document.querySelector(".content");

  newParagraph.textContent = "Новый абзац";
  newParagraph.className = "content__description";
  container.appendChild(newParagraph);
});


document.getElementById("delFirstParagraph").addEventListener("click", function () {
  const targetContent = document.querySelector('.content');
  const targetParagraph = document.querySelector('p.content__description');

  targetContent.removeChild(targetParagraph);
});
