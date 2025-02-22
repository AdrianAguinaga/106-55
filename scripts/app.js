
function hello(){
    console.log("Hello there");
}

function init(){
    console.log("im the init fuction");
    hello();
}
//new code change

window.onload = hello;