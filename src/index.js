function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
}


let shanghaiElement = document.querySelector("#shanghai");
if (shanghaiElement) {
let shanghaiDateElement = shanghaiElement.querySelector(".date");
let shanghaiTimeElement = shanghaiElement.querySelector(".time");
let shanghaiTime = moment().tz("Asia/Shanghai");


shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML =
     `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")} <small> ${cityTime.format(" A")}</small></div>
        </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);



let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);