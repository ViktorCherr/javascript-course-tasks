/*
Создайте веб-страницу с формой для ввода данных пользователя. 
Форма должна содержать следующие поля:
 - Имя (текстовое поле, обязательное для заполнения).
 - Email (поле ввода email, обязательное для заполнения).
 - Возраст (поле ввода числа, обязательное для заполнения).
При нажатии на кнопку "Сохранить", введенные пользователем данные должны 
быть сохранены в объекте. 
После сохранения, отобразите сохраненные данные на странице.
*/

function userData(userName, email, age) {
    this.userName = userName;
    this.email = email;
    this.age = age;
}

function saveUserData(){
    const nameInp = document.querySelector('#name');
    const emailInp = document.querySelector('#email');
    const ageInp = document.querySelector('#age');
    if (nameInp.value !== '' && emailInp.value !== '' && ageInp.value !== '') {
        let userObj = new userData(nameInp.value, emailInp.value, ageInp.value);
        for (let field of [nameInp, emailInp, ageInp]) {
            field.value = '';
        }
        document.querySelector('#outputName').textContent = userObj.userName;
        document.querySelector('#outputEmail').textContent = userObj.email;
        document.querySelector('#outputAge').textContent = userObj.age;
        document.querySelector('#output').className = '';
    } else alert('Заполните все поля');
}