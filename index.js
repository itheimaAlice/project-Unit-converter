/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btn = document.getElementById("btn")
let num = document.getElementById("num")
let meterFeet = document.getElementById("meter-feet")
let litersGallons = document.getElementById("liters-gallons")
let kilosPounds = document.getElementById("kilos-pounds")

btn.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * 100)
    num.textContent = randomNum
    meterFeet.textContent = `${randomNum} meters = ${(randomNum * 3.281).toFixed(2)} feet | ${randomNum} feets = ${(randomNum / 3.281).toFixed(2)} meters`
    litersGallons.textContent = `${randomNum} liters = ${(randomNum * 0.264).toFixed(2)} gallons | ${randomNum} gallons = ${(randomNum / 0.264).toFixed(2)} liters`
    kilosPounds.textContent = `${randomNum} kilos = ${(randomNum * 2.204).toFixed(2)} pounds | ${randomNum} pounds = ${(randomNum / 2.204).toFixed(2)} kilos`
})