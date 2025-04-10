let tasks = [" Buy milk " , " Clean the room " , " Go to the gym "];

function displaytasks(){
    console.log(" Tasks on your to list are :")
    tasks.forEach((task,index) => {
        console.log(`${index + 1} : ${task}`)
    })
}

function addTask(tasks) {
    tasks.push(tasks);
    console.log(`After adding ${task} items on yout to do list are`);
    displaytasks();
}
addTask("buy eggs")
displaytasks()