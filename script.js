let weather = {
    apiKey: "1e24d31e5fbd1eded87c5d8a5c82e5e2",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
        .then((response) => {
            if (!response.ok) {
                alert("Enter valid location");
                throw new Error("Enter valid location");
            }
            return response.json();
        })
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;


        // document.querySelector(".icon").src = "img/" + icon + ".svg"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('http://source.unsplash.com/1600x900/?" + name + "')";

        const iconElement = document.querySelector(".icon");
        iconElement.className = "icon";

        if (description.includes("clear")) {
            iconElement.src = "img/clear.svg"; // Clear sky
        } else if (description.includes("broken clouds")) {
            iconElement.src = "img/broken clouds.svg"; // Broken clouds
        } else if (description.includes("scattered clouds")) {
            iconElement.src = "img/scattered clouds.svg"; // Scattered clouds
        } else if (description.includes("few clouds")) {
            iconElement.src = "img/few clouds.svg"; // Few Clouds
        } else if (description.includes("clouds")) {
            iconElement.src = "img/clouds.svg"; // Cloudy   
        } else if (description.includes("light rain")) {
            iconElement.src = "img/light-rain.svg"; // Light Rain
        } else if (description.includes("moderate rain")) {
            iconElement.src = "img/moderate rain.svg"; // Moderate Rain
        } else if (description.includes("heavy rain")) {
            iconElement.src = "img/heavy rain.svg"; // Heavy Rain
        } else if (description.includes("shower rain")) {
            iconElement.src = "img/shower rain.svg"; // Shower Rain
        } else if (description.includes("rain")) {
            iconElement.src = "img/rain.svg"; // Rain
        }else if (description.includes("light snow")) {
            iconElement.src = "img/light snow.svg"; // Light snow
        }else if (description.includes("heavy snow")) {
            iconElement.src = "img/heavy snow.svg"; // Heavy Snow
        }
         else if (description.includes("snow")) {
            iconElement.src = "img/snow.svg"; // Snow
        } else if (description.includes("haze")) {
            iconElement.src = "img/haze.png" //Haze
        } else if (description.includes("mist")) {
            iconElement.src = "img/mist.png" //Mist
        } else if (description.includes("thunderstorm")) {
            iconElement.src = "img/thunder.svg"; // Thunderstorm  
        } else if (description.includes("drizzle")) {
            iconElement.src = "img/drizzle.svg"; // Drizzle
        }
        else {
            iconElement.src = "img/clear.svg"; // Default icon
        }

        // document.querySelector(".icon").src = iconUrl;

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};


document.querySelector(".search button")
    .addEventListener("click", function () {
        weather.search();

    });

document.querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {

            weather.search();

        }
    });




weather.fetchWeather("Lucknow");
