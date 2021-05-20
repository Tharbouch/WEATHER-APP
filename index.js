let city = '';
fetchWeather(city);
document.querySelector(".searchButton").addEventListener("click",function () {
    getcity();    
});

document.querySelector(".searchTerm").addEventListener("keyup",function (key) {
    if(key.key == "Enter")
    {
        getcity();
    }
})
function getcity() {
    let city = document.querySelector(".searchTerm").value;
        fetchWeather(city);
}

function fetchWeather(city) {
    if (city == '') {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=marrakech&units=metric&appid=c4eb63a14f6e73e2517f6971c2fc6890")
            .then((Response) => Response.json())
            .then((data) => printinfo(data))
    }
    else{
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=c4eb63a14f6e73e2517f6971c2fc6890")
            .then((Response) => Response.json())
            .then((data) => printinfo(data))
    }
}
function printinfo (data) 
{
        let { name } = data;
        let { icon, description } = data.weather[0];
        let { temp, humidity } = data.main;
        let { speed } = data.wind;
        document.getElementById('City').innerText = name;
        document.getElementById('Icon').src = "https://openweathermap.org/img/wn/"+icon+"@4x.png";
        document.getElementById('Temp').innerText = Math.round(temp)+"°C";
        document.getElementById('Status').innerText = description;
        document.getElementById('Speed').innerText = Math.round(speed*3.6)+"Km/h";
        document.getElementById('Porcentage').innerText = humidity+"%";        
}
