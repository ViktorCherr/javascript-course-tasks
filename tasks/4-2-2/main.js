/*
Помните задачу про перевод градусов Цельсия в градусы Фаренгейта?
 Напишите программу, которая запрашивает у пользователя температуру в градусах Цельсия, 
 преобразует ее в градусы Фаренгейта и выводит на экран результат в виде строки. 
 Формула для преобразования: F = (9/5) * C + 32, где 
 F - температура в градусах Фаренгейта, 
 C - температура в градусах Цельсия.

 Вам нужно дописать функцию convertTemperature(), чтобы она выполнялась
 по нажатию на кнопку. И после ее выполнения в div с id="result" должна 
 появиться надпись с вычисленным преобразованием.
 */

const button = document.querySelector("button");
const celsius = parseInt(document.querySelector("#celsius").value);
const result = document.querySelector("#result");

button.addEventListener("click", function(){
    result.textContent = `${celsius} градуса Цельсия = ${celsius * (9/5) + 32} градуса по Фаренгейту`;
});