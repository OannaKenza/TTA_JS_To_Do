let tasks = [
    ["Work", ["Complete the report", "Email the team", "Call the client"]],
    ["Personal", ["Buy groceries", "Pick up the kids", "Do laundry"]]
]
// Function to display task and their category
function displayCategorizedTasks(){
    tasks.forEach((category) =>{
        console.log(`\t ${category[0]} Tasks:`);
        category[1].forEach((task,index) => {
            console.log(`\t\t ${index + 1}.  ${task}`);
        })
    })
}

function addCategorizedTasks(category,task){
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i][0] === category){
            tasks[i][1].push(task);
            console.log(`\n Task "${task}" added to "${category}" tasks \n`);
            console.log(" To do list after adding a new task");
            return;
        }
    }
    console.log(`Category "${category}" not found \n`)
}
console.log("To do list before adding a new task \n")
displayCategorizedTasks()

addCategorizedTasks("Work" , "Complete the presentation")
displayCategorizedTasks()