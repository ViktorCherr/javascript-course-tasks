/*
Давайте представим, что вы разрабатываете приложение для учета библиотеки книг.

Вам нужно реализовать ряд функций:
- функцию addBook(), которая запускается по клику на кнопку.
- функцию, которая будет отслеживать количество книг каждого жанра в библиотеке с использованием объекта Map.
- функцию, которая будет перерисовывать статистику.
- функцию, которая будет перерисовывать историю.
- опционально: проверки/очистка ввода и все, что вам еще захочется и потребуется.
*/
const genreStats = new Map();

function addBook() {
    const title = document.getElementById('bookTitle').value;
    const genre = document.getElementById('genre').value;
    if (title !== '') {
        updateStats(genre);
        updateViewHistory(title, genre);
        updateViewStats();
        document.getElementById('bookTitle').value = '';
    } else {
        alert('Укажите название книги!');
    }
}

function updateStats(genre) {
    if (genreStats.has(genre)) {
        genreStats.set(genre, genreStats.get(genre) + 1);
    } else {
        genreStats.set(genre, 1);
    }
}

function updateViewHistory(title, genre){
    const history = document.querySelector('#history');
    let li = document.createElement('li');
    li.innerHTML = `title: ${title} | genre: (${genre})`;
    history.insertBefore(li, history.childNodes[0]);
}

function updateViewStats(){
    const stats = document.querySelector('#genreStats');
    stats.innerHTML = '';
    for ([key, value] of genreStats) {
        let div = document.createElement('div');
        div.className = 'genre';
        div.innerHTML = `<p>${key}:</p><p>${value} books</p>`;
        stats.appendChild(div);
    }
}