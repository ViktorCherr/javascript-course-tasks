/*
Напишите программу "Генератор пароля", которая генерирует пароль, 
исходя из опций, выбранных пользователем. Также есть кнопка копирования пароля.

Опции для пользователя:
- поддержка символов в нижнем регистре (a-z)
- поддержка символов в верхнем регистре (A-Z)
- поддержка цифр (0-9)
- поддержка символов (!-$^+)
- поддержка пробелов
- отсутствие одинаковых символов в пароле (например, aabc недопустимо из-за двух a)

Можно использовать свои иконки - https://fonts.google.com/icons

Можно полностью изменить дизайн страницы, в общем, как обычно 
полная свобода в плане внешнего вида, главно - функциональность.

Вам также даны символы в виде объекта.
*/

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!$%&|[](){}:;.,*+-#@<>~"
}

let selectedItems = [];
const resultField = document.querySelector('#result');
const copyBtn = document.querySelector('#copy-btn');

document.querySelector('.generate-btn').addEventListener('click', function(){
    document.querySelectorAll('input[type=checkbox]').forEach(inp => {
        if (inp.checked) {
            selectedItems.push(inp.id);
        }
    })
    symbolsString = characters.lowercase;
    symbolsString += selectedItems.includes('spaces') ? ' ' : '';
    for (let item of selectedItems) {
        if (item !== 'spaces' || item !== 'exc-duplicate') {
            symbolsString += characters[item];
        }
    }
    resultField.value = getPassword(symbolsString);
})

function getPassword(str) {
    const passwordLength = document.querySelector('#length').value;
    let result = '';
    if (passwordLength !== '' && +passwordLength >= 5 && +passwordLength <= 20) {
        while (result.length !== +passwordLength) {
            let symbol = str[Math.round(Math.random() * str.length)];
            if (selectedItems.includes('exc-duplicate')) {
                result += result.includes(symbol) ? '' : symbol;
            } else {
                result += symbol;
            }
        }
    } else {
        alert('Укажите длину пароля от 5 до 20 символов!');
    }
    document.querySelector('#length').value = '';
    return result;
}

copyBtn.addEventListener('click', function(){
    copyBtn.textContent = 'done_all';
    copyBtn.style.color = '#4CAF50';
    navigator.clipboard.writeText(resultField.value);
    setTimeout(() => {copyBtn.textContent = 'content_copy'; copyBtn.style.color = '#707070'}, 5000);
})
