const apiKey="00c2ea5decbf904ba7d4099a16e9a40a";
const searchBox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city)
{
    const response=await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data=await response.json();
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°c";
document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";

}
searchbtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})


