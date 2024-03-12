/*
Вам нужно получить и вывести значения в консоль или в alert значения из:
h1
любого h2
первого элемента списка li
второго label (Фото котика/собаки)
*/
const h1 = document.querySelector("h1").innerText;
const h2 = document.querySelectorAll("h2")[0].innerText;
const liFirst = document.getElementsByTagName("li")[0].innerText;
const labeltwo = document.querySelector("lable[for='cat-photo']").innerText;

console.log(`${h1}\n${h2}\n${liFirst}\n${labeltwo}`);