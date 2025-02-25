
function saveTask(){
    console.log("Saving task...");

    


}

function init(){
    console.log("im the init fuction");
    
    //load data

    //hook events
    $("#btnSave").click(saveTask);
}
//new code change

window.onload = init;