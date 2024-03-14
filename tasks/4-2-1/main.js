/*
Вам нужно написать js код, который выведет сумму введенных в input чисел.
*/
const button = document.querySelector("button");
const inp1 = +document.querySelector("[name='input-1']").value;
const inp2 = +document.querySelector("[name='input-2']").value;
const res = document.querySelector("#result");

button.addEventListener("click", function(){
    res.textContent = `${inp1} + ${inp2} = ${inp1 + inp2}`;
});

