// function printNames(){
//     document.write("Reis");
//     document.write("<br>");
//     setTimeout(function(){
//         document.write("Jora");
//     }, 3000     );
//     document.write("Daors");
// }

// printNames();

var colors = ['red', 'green', 'blue', 'purple', 'pink']

function changeBg(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];
}

setInterval(changeBg, 1000)

var names=['Reis', 'Lum', 'Buna', 'Jora', 'Buna', 'Daors'];
function changeNames(){
    document.querySelector('p').innerHTML=
    names[Math.floor(Math.random()*names.length)];
}

setInterval(changeNames, 1000)