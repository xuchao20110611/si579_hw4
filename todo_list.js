function addTask(description,dueTime) {

    const newtask = document.createElement("li");
    const taskList = document.getElementById("task_list");
    newtask.textContent =description;

    if(dueTime)
    {
        const newdue = document.createElement("span");
        newdue.className="due";



        var due =new Date(dueTime);


        newdue.textContent=" due "+due.toLocaleDateString('en-US')+" "+due.toLocaleTimeString('en-US');
        newtask.appendChild(newdue);

    }

    const newbutton = document.createElement("button");

    newbutton.className="btn btn-sm btn-outline-danger done";
    newbutton.type="button";
    newbutton.textContent=" Done";
    newbutton.setAttribute('onclick','del(this)');

    newtask.appendChild(newbutton);

    taskList.appendChild(newtask);
    document.getElementById("duetime_input").value='';
    document.getElementById("duedate_input").value='';
    document.getElementById("task_description_input").value='';
}

addTask("Buy milk")
addTask("Learn to wrap gifts", 1639944400000)
addTask("Seek Intern", 1639944400000+2678400000)
addTask("Date with girlfriend")


function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;

    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}


function useradd()
{
    var dateinput= new Date(document.getElementById("duedate_input").value).getTime();
    const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
    var timeinput= new Date("1970-01-01 "+document.getElementById("duetime_input").value).getTime()-timezoneOffset;
    var taskinput= document.getElementById("task_description_input").value;
    var tsinput=dateAndTimeToTimestamp(dateinput,timeinput);
    addTask(taskinput,tsinput);
}
document.getElementById("add_task").addEventListener("click", useradd);
document.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        useradd();
    }}
    );


function del(obj){
    var oParent = obj.parentNode;
    // console.log(oParent)
    document.getElementById("task_list").removeChild(oParent);
}



