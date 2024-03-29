/*
На странице присутствует поле для ввода и кнопка. 
По нажатию на кнопку введенная фамилия студента должна добавиться в массив 
и отобразиться в списке на странице с помощью функции showStudents, 
которая также работает с массивом фамилий студентов.
*/

// Массив для хранения фамилий студентов
const studentsArray = [];

function addStudent() {
    let studentName = document.querySelector("#student-name").value;
        if (studentName !== "") {
            let li = document.createElement('li');
            li.textContent = studentName;
            studentsArray.push(li);
            showStudents();
        } else {
            alert("Введите имя!");
    }
}

function showStudents() {
    const liElem = document.querySelector('#student-list');
    liElem.innerHTML = '';
    
    studentsArray.forEach(stud => liElem.appendChild(stud));
}
