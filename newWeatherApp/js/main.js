

function startDate() {
    var today = new Date;
    
    var day = today.getDate();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];  
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes + ":" + today.getSeconds();
    // var dateTime = date+ " " + time;

     document.getElementById("date").innerHTML = days[today.getDay()]+" | "+today.getDate()+" "+months[today.getMonth()]+" "+today.getFullYear()
       
}
startDate();

//Selecting and calling elements
var country = document.querySelector("#country");
var city = document.querySelector("#city");
var check = document.querySelector("#check");

//Selecting weather tempIcon Icons 1-4
var tempIcon = document.querySelector("#tempIcon");
var tempIcon2 = document.querySelector("#tempIcon2");
var tempIcon3 = document.querySelector("#tempIcon3");
var tempIcon4 = document.querySelector("#tempIcon4");

var weatherCountry = document.querySelector("#weatherCountry");
var temperature = document.querySelector("#temperature");
var weatherDescription = document.querySelector("#weatherDescription");

var feelsLike = document.querySelector("#feelsLike");
var humidity = document.querySelector("#humidity");
var longitude = document.querySelector("#longitude");
var latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    //    console.log(country.value);
    //    console.log(city.value);

    // var key = `bd4ea33ecf905116d12af172e008dbae`;
    var key = `f26e0ab159b9c364e2996812a2e68e54`
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;

            //Use Open weather Map URL For Icons If You Want To Use
            //How To Use

            //             var iconsForTemp = `http://openweathermap.org/img/wn/${items.icon}.png`;
            //            tempIcon.src = iconsForTemp;
            //            
            //i Will Use My Own Icons
            //tempIcon to change with respect to weather temprature
            if (items.id < 250) {
                tempIcon.src = `assets/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `assets/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `assets/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `assets/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `assets/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `assets/sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `assets/clouds.svg`;
            }

            //Humidity to change with respect to % of moisture
            if (items.id  = 40) {
                tempIcon2.src = `images/rain-svgrepo-com.svg`;
            } else if (items.id < 55) {
                tempIcon2.src = `images/snow-svgrepo-com.svg`;
            } else if (items.id > 65) {
                tempIcon2.src = `images/drizzle.svg`
        };
        });

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        humidity.innerText = `Humidity ${data.main.humidity}%`;
        latitude.innerText = `Latitude ${data.coord.lat}°C`;
        longitude.innerText = `Latitude ${data.coord.lon}`;
    })
    country.value = "";
    city.value = "";
})
