// Создание переменных и констант
const image = document.getElementById("top__image"),
    gameStateText = document.getElementById("game_state"),
    input = document.getElementById("input"),
    checkButton = document.getElementById("check");
const words = ["яблоко", "машина", "дом", "ястреб", "авиашкола", "любовь", "землекоп", "август", "жакет", "жара", "пиротехника", "овощ"];
let attempts = 1,
    gameState = [],
    usedLetters = [],
    answer = words[Math.floor(Math.random() * Math.floor(words.length))].split("");

// Вывод начального состояния игры на экран
for (let i = 0; i < answer.length; i++) gameState.push("_");
gameStateText.innerHTML = gameState.join(" ");

// Функция для проверки, присутствует ли введенная буква в слове
function checkLetter() {
    if (!input.value) {
        alert("Пожалуйста, введите букву!");
    } else if (input.value.length > 1) {
        input.value = "";
        alert("Пожалуйста, введите только одну букву!");
    } else if (usedLetters.includes(input.value.toLowerCase())) {
        input.value = "";
        alert("Вы уже вводили эту букву!");
    } else {
        if (answer.includes(input.value.toLowerCase())) {
            for (let i = 0; i < answer.length; i++)
                if (answer[i] === input.value.toLowerCase()) gameState[i] = input.value.toLowerCase();
            gameStateText.innerHTML = gameState.join(" ");
            usedLetters.push(input.value.toLowerCase());
            input.value = "";

            // Проверка на то, не угадали ли слово
            if (answer.join("") === gameState.join("")) {
                alert("Вы выиграли!");
            }
        } else {
            // Сюда нужно будет вписать код для обновления картинки
            image.src = `img/${attempts}.png`;
            attempts++;
            usedLetters.push(input.value.toLowerCase());
            input.value = "";

            // Проверка на то, не зокончились ли попытки
            if (attempts > 10) {
                alert("Вы проиграли!");
            }
        }
    }
}