// function lum() {
//     alert("This is a function");
// }

// lum();


// function reis(number1, number2) {
//  return number1 + number2;
// };

// console.log(reis(10,10));

// function toCelsius(number1) {
//     return (number1 - 32) * 5 / 9;
// }

// console.log(toCelsius(56));

// function drin() {
//     var localvar = "this is local";
//     alert(localvar);
// }

// drin();

var jora = () => alert("Hello Jora");
jora();

function toSeconds(num1) {
    return (num1 *60);
}
console.log(toSeconds(2))

var kerri = {
  name: "audi",
  color: "red",
  year: 2016,
  startEngine: function() {
    alert("vroom");
  }
};

console.log(kerri.name);
console.log(kerri.color);
console.log(kerri.year);

kerri.startEngine();

var computer = new Object();

computer.name="Lenovo";
computer.cpu="Intel Core i7";
computer.ram="16GB";
computer.gpu="GeForce 4080";

computer.type = function(){
    return this.name+this.cpu+this.ram+this.gpu;
};
console.log(computer.type());