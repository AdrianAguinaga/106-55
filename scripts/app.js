
function saveTask(){
    console.log("Saving task...");
    // get values

    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, description, color, date, status, budget);

    //build an object

    let taskToSave = new Task(title, description ,color,  date, status, budget);
    console.log(taskToSave);
    //save to the server


    //display the task  
    displayTask(taskToSave); 

}

function displayTask(task)
{
    let syntax = `
    <div class = "task" style="border-color:${task.color}">
    <div class= "info">
    <h3>${task.title}<h3>
    <p>${task.desc}<p>
    </div>
    <label class="status">${task.status}</label>
    <div class="dateBudget">
    <label>${task.startdate}</label>
    <label>${task.budget}</label>
    </div>
    </div>`;

    $(".pendingTask").append(syntax);
}



function init(){
    console.log("im the init fuction");
    
    //load data

    //hook events
    $("#btnSave").click(saveTask);
}
//new code change

window.onload = init;