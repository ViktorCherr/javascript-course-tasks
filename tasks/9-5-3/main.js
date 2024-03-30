/*
Вы разрабатываете сайт и вам нужно реализовать функциональность выбора языка сайта. 
Для этого вы используете выпадающий список (select). 
Функция должна принимать в качестве аргумента выбранный пользователем язык и 
выводить в консоли сообщение о смене языка на выбранный язык, например "Language changed to Español" .

Если язык не выбран или выбранный язык не поддерживается, функция 
должна выводить сообщение об ошибке. Для реализации этой задачи можно 
использовать switch в комбинации с условным оператором.
*/

const languages = document.querySelector('#language-select');

document.querySelector('#change-language-btn').addEventListener("click", changeLang);

function changeLang() {
    let indx = languages.selectedIndex;
    let lang = languages[indx].text;
    if (lang) {
        console.log(`Language changed to ${lang}`);
    } else {
        document.querySelector('#error-message').textContent = "This language was not found";
    }
}