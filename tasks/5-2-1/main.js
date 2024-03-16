/*
Дана форма с вводом Фамилии, Имени и Отчества пользователя. 
Выведите в элемент span фамилию и инициалы пользователя в формате: Фамилия И.О.

Важно: пользователь может ввести лишние пробелы - это должно отслеживаться.
 */
const spanElem = document.querySelector("span");
const inpName = document.querySelector("#name");
const inpSurName = document.querySelector("#surname");
const inpPatr = document.querySelector("#patronymic");
const buttElem = document.querySelector("button");


// let res = `${inpSurName.value.trim()} ${inpName.value.trim()[0].toUpperCase()}. ${inpPatr.value.trim()[0].toUpperCase()}.`;

buttElem.addEventListener("click", function(){
    spanElem.textContent = `${inpSurName.value.trim()} ${inpName.value.trim()[0].toUpperCase()}. ${inpPatr.value.trim()[0].toUpperCase()}.`;
});