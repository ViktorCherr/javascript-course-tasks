/*
На веб-странице есть список студентов. 
Необходимо добавить поле ввода, которое будет фильтровать 
список студентов по введенному тексту.
*/

const students = [
    'Алексей',
    'Ирина',
    'Максим',
    'Наталья',
    'Ольга',
    'Сергей',
    'Виктор',
    'Ибрагим',
    'Анатолий',
    'Владислав',
    'Григорий',
    'Мария',
];
const ulElem = document.querySelector('#student-list');
// Назначаем обработчик события ввода на поле
document.getElementById('filter-input').addEventListener('input', handleFilter);

// Изначально отображаем всех студентов
showStudents(students);

// Функция обработки события ввода и фильтрации
function handleFilter(event) {
    // Получаем значение из поля ввода (фильтр)
    const filterValue = event.target.value.trim().toLowerCase();
    // Очищаем список студентов на веб-странице
    clearStudentsList();

    // Перебираем массив "students" и отображаем только отфильтрованных студентов
    students.forEach(student => {
        if (student.toLowerCase().startsWith(filterValue)) {
            addStudentToList(student);
        }
    })
}

// Функция отображения всех студентов
function showStudents(studentsArray) {
    for (let student of studentsArray) {
        addStudentToList(student);
    }
}

// Функция добавления студента в список на веб-странице
function addStudentToList(student) {
    let li = document.createElement('li');
    li.textContent = student;
    ulElem.appendChild(li);
}

// Функция очистки списка студентов на веб-странице
function clearStudentsList() {
    ulElem.innerHTML = '';
}