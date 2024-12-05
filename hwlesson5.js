//Bài 1-------------------------------------------------------------------------------------------------------------

//Bài 4-------------------------------------------------------------------------------------------------------------
function convertToFahrenheit(a)
{
    return (a*9/5) + 32;
}
let value1 = convertToFahrenheit(25);
document.getElementById("result").innerHTML = value1;

function toCelsius(f) {
    return (5/9) * (f-32);
}
let value2 = toCelsius(77);
document.getElementById("result").innerHTML = value2;

// function GiaiThua(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
