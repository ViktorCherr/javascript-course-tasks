/*
Дана форма с вводом Фамилии, Имени и Отчества пользователя. 
Дана форма с вводом Фамилии, Имени и Отчества пользователя. 
По кнопке Добавить пользователя - пользователь должен быть добавлен в список ниже. 

Вы также можете усложнить задание и добавить удаление пользователя.
 */
const inpName = document.querySelector("#name");
const inpSurName = document.querySelector("#surname");
const inpPatr = document.querySelector("#patronymic");
const list = document.querySelector("#user-list");
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerHTML = `Пользователь: ${inpSurName.value.trim()}
        ${inpName.value.trim()[0].toUpperCase()}. ${inpPatr.value.trim()[0].toUpperCase()}.
        <button onclick="removeItem(this)">Удалить</button>`;

    list.appendChild(li);
});

function removeItem(button){
    list.removeChild(button.parentNode);
}