/*
Вам нужно написать js код, который выведет сумму введенных в input чисел.
*/
const button = document.querySelector("button");
const inp1 = document.querySelector("[name='input-1']");
const inp2 = document.querySelector("[name='input-2']");
const res = document.querySelector("#result");

button.addEventListener("click", function(){
    res.textContent = `${inp1.value} + ${inp2.value} = ${+inp1.value + +inp2.value}`;
});

