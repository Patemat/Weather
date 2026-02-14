document.addEventListener("DOMContentLoaded", () => {
  pogoda();
});

const API_key = '64538bfeb969ba077b1725b0d42f9acb'

async function pogoda () {
    const input = document.getElementById('city_');
    input.addEventListener("keydown", async (event) => {
        if (event.key === "Enter") {
            const city_name = input.value;

            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric&lang=ru`;
            const rez = await fetch(url);
            
            if (!rez.ok) {
                window.alert(`Ошибка${rez.status}`)
            }

            const data = await rez.json();

            const temp = data.main.temp;
            const temp_feel = data.main.feels_like;
            const description = data.weather[0].description;
            const wind_speed = data.wind.speed;
            const clouds_proch = data.clouds.all;
            const pressure = data.main.pressure;
            const humidity = data.main.humidity;

            const sunrise_unix = data.sys.sunrise;
            const flag = new Date(sunrise_unix * 1000);
            const sunrise = flag.toLocaleTimeString();
            
            const sunset_unix = data.sys.sunset;
            const flag_2 = new Date(sunset_unix * 1000);
            const sunset = flag_2.toLocaleTimeString();

            
            const temp_div = document.getElementById('Div1')
            const description_div = document.getElementById('Div2')
            const wind_div = document.getElementById('Div3')
            const cloud_div = document.getElementById('Div4')
            const pressure_div = document.getElementById('Div5')
            const hemidity_div = document.getElementById('Div6')
            const sun_div = document.getElementById('Div7')

            temp_div.innerHTML = `🌡 Температура: ${temp}<p>🌡 Ощущается как: ${temp_feel}`
            description_div.innerHTML = `🌳 Общее описание: ${description}`
            wind_div.innerHTML = `💨 Скорость ветра: ${wind_speed} м/c`
            cloud_div.innerHTML = `☁️ Облачность: ${clouds_proch}%`
            pressure_div.innerHTML = `📍 Давление: ${pressure} гПа`
            hemidity_div.innerHTML = `💧 Влажность: ${humidity}%`
            sun_div.innerHTML = `🌅 Рассвет: ${sunrise}<p>🌄 Закат: ${sunset}`
            
            

        }
    })
}