const form = document.querySelector("form");
const input = document.querySelector("input");
const putWeatherDataBox = document.querySelector("#weather");
const key=`e266c548e6486d01e58aa75f25ec1147`;
//handling form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();//doesnot allow form to be submitted
  getWeatherData();
});


// function to fetch data  from api
async function getWeatherData() {
  putWeatherDataBox.innerHTML = `
   

    <h1>Loading... </h1>

     
    `;
  const response = await fetch(
    `https:api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`
  );

  const data = await response.json();
 // errorMessage
  if (data.cod == 404) {
    putWeatherDataBox.innerHTML = `<h2> Enter valid city name <h2>`;
    return;
  }

  const temp = data.main.temp;
  const weather = data.weather[0].main;
  const weatherIcon = data.weather[0].icon;

  putWeatherData(temp, weather, weatherIcon, data);
}




//function to render the data
function putWeatherData(temp, weather, weatherIcon, data) {
  

  putWeatherDataBox.innerHTML = `

<div>
<img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png" alt="">
</div>
<div>
<h2>${temp}°C</h2>
<h4> ${weather}</h4>
</div>


`;
}
