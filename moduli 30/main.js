x=6
if (x>3) {
    console.log("The number is greater than 3")
} else {
    console.log("The number is smaller than 3")
}

var input = document.getElementById("input");
var btn = document.getElementById("btn");
var text = document.getElementById("text");

btn.onclick = function(){
    text.innerHTML = input.value
}

var input1 = document.querySelector("#input1");
var input2 = document.querySelector("#input2");
var btn2 = document.querySelector("#btn2");
var result = document.querySelector("#result");
var kushti = document.querySelector("#kushti")

btn2.onclick = function(){
    result.innerHTML = parseInt(input1.value) + parseInt(input2.value);
}

btn2.onclick = function(){
    if (result>10) {
        kushti.innerHTML= "numri > 10"
    } else if(result<10){
        kushti.innerHTML= "numri <10"
    }else{
        kushti.innerHTML = "Numri = 10"
    }
}