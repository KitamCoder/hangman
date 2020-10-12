# HangmanGame
Игра "Виселица".
___
### Установка и запуск
- Скопируйте репозиторий на ваш компьютер.
- Откройте файл **index.html**, используя браузер.
___
### Настройка квеста
Также есть возможность добавить свои слова для угадывания.
- Чтобы настроить квест, откройте файл **script.js**, используя любой текстовый редактор.
- Найдите следующие строчки:
```js
const words = [
    // Какой-то текст
];
```
- В данном массиве записаны все слова, которые могут выпасть для угадывания. 
- Вы можете дописывать свои слова через запятую в кавычках.
___
### Правила игры
- Загадывается случайное слово. Все буквы в слове заменяются нижним подчеркиванием.
- Вы должны отгадать загаданное слово.
- Вы в поле для ввода должны вводить по одной букве, а затем нажимать кнопку "Проверить".
- Если введенная буква присутствует в загаданном слове, она вставляется в слово. 
- Если введенная буква отсутствует в загаданном слове, рисуется один из элементов рисунка виселицы.
- Если вы не успеете отгадать слово до того, как рисунок будет завершен, вы проиграете.
___