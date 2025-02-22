
function hello(){
    console.log("Hello there");
}

function init(){
    console.log("im the init fuction");
    hello();
}
//new

window.onload = hello;