function show(){
var citye = document.getElementById('city').value;
console.log(citye);
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d0ccf39c5mshacba2fd01646a99p126bc1jsn846667c32483',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const datw = new Date();
date.innerHTML = datw;
times.innerHTML = citye;
//times.innerHTML = navigator.geolocation.getCurrentPosition(showPosition); 

fetch(url+'='+citye,options).then(response => response.json()).then(response =>{
	console.log(response); 
	cloud_pct.innerHTML= response.cloud_pct + " %",
    feels_like.innerHTML = response.feels_like+" °C",
    humidity.innerHTML =  response.humidity+" %",
    max_temp.innerHTML =  response.max_temp+" °C",
    min_temp.innerHTML = response.min_temp+" °C",
    sunrise.innerHTML = response.sunrise,
    sunset.innerHTML =  response.sunset,
    temp.innerHTML =  response.temp+" °C",
    wind_degrees.innerHTML = response.wind_degrees+" km/h",
    wind_speed.innerHTML= response.wind_speed+" km/h"})
    .catch(err => console.error(err));
}

