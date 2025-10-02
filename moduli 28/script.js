var button = document.getElementById("button1")

button.onclick = function(){
    alert("click")
}

var button2 =document.getElementById("button2")

button2.addEventListener('click', function(){
    alert("event listener")
})

var button3 = document.getElementById("button3")
button3.onmouseover = function(){
    alert("over");
}

var button4 = document.getElementById("button4")
button4.onmouseleave = function(){
    alert("leave");
}

var button5 = document.getElementById("button5")
button5.onmousewheel = function(){
    alert("wheel");
}



var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var text = document.getElementById("text1")

btn1.onclick = function(){
    text.style.color="red"
}