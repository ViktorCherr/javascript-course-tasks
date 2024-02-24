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
    // ... добавьте еще имен по желанию
];

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
}

// Функция отображения всех студентов
function showStudents(studentsArray) {

}

// Функция добавления студента в список на веб-странице
function addStudentToList(student) {

}

// Функция очистки списка студентов на веб-странице
function clearStudentsList() {

}