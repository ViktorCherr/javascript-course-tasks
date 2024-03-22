/*
Напишите программу, которая запрашивает у пользователя число с 
помощью модального окна (например, prompt) или можно добавить input 
с кнопкой и выводит на страницу таблицу умножения для этого числа. 
Таблица должна быть представлена в виде HTML-таблицы, 
где значения в ячейках - результаты умножения числа на числа от 1 до 10.
 */
let num = document.querySelector("input");
let btn = document.querySelector(".btn");
let tableCont = document.querySelector("#table-container");

btn.addEventListener("click", function(){
    tableCont.innerHTML = "";
    let number = parseInt(num.value);
    if (number > 0 && number <= 10) {
        table = document.createElement("table");
        for (let i = 1; i <= 10; i++) {
            let tableRow = document.createElement("tr");
            tableRow.innerHTML = `<td>${number} * ${i}</td><td>${number * i}</td>`;
            table.appendChild(tableRow);
        }
        tableCont.appendChild(table);
    } else {
        alert("Введите число от 1 до 10!");
        num.value = "";
    }
});