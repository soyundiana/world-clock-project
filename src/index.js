function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

let shanghaiElement = document.querySelector("#shanghai");
let shanghaiDateElement = shanghaiElement.querySelector(".date");
let shanghaiTimeElement = shanghaiElement.querySelector(".time");
let shanghaiTime = moment().tz("Asia/Shanghai");


shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
