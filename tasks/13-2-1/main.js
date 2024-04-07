/*
Ваша задача создать простое веб-приложение для получения 
температуры в указанном городе. Приложение должно состоять 
из формы для ввода города и кнопки "Узнать температуру". 
Рядом с формой должен отображаться блок с текущей температурой.
*/
const APIKey = 'b6f5908d1639a5ea7d9cdd124ab274fe';
const temperature = document.querySelector('#temperature');


document.querySelector('button').addEventListener('click', () => {
    const inp = document.querySelector('#city');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=${APIKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let icon = data.weather[0].icon;
            temperature.innerHTML = `${data.weather[0].description} <br> Температура: ${Math.round(data.main.temp - 273.15)}&deg;C <br> Влажность: ${data.main.humidity
            }% <br>Ветер: ${data.wind.speed}м/с`;
            document.querySelector('#weather i').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="">`;
        })
        .catch(error => {
            console.error(error)
            temperature.innerHTML = 'City not found';
        })
    inp.value = '';
})