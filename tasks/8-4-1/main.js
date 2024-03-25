/*
Перед вами страница с добавлением товара в корзину и удалением товара из нее.
Вам нужно реализовать:
- скрипт, который при нажатии на кнопку "Купить" добавляет соответствующий товар в корзину.
- функцию для удаления товара из корзины.
*/
document.querySelectorAll(".buy-button").forEach((button) => {
    button.addEventListener("click", addToBasket);
})

function addToBasket(event) {
    const parent = event.target.parentNode;
    let prodName = parent.querySelector(".product-name").textContent;
    let li = document.createElement("li");
    li.className = 'cart-item';
    li.innerHTML = `<span>${prodName}</span><button onclick='delElem(this)'>Удалить</button>`
    document.querySelector("#cart-list").appendChild(li);
}

function delElem(button) {
    parent = button.parentNode;
    document.querySelector("#cart-list").removeChild(parent);
}