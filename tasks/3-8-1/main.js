/*
Вам нужно получить и вывести значения в консоль или в alert значения из:
h1
любого h2
первого элемента списка li
второго label (Фото котика/собаки)
*/
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2")[0];
const liFirst = document.querySelector("cat-list")[0];
const labeltwo = document.querySelector(".cat-photo");

console.log(`${h1}\n${h2}\n${liFirst}\n${labeltwo}`);