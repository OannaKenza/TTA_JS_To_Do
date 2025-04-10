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

//function to add a new task to a category
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

//fuction to remove a task from a category 
function removeCategorizedTask(category,index){
    for (let i = 0; i < tasks.length; i++){
        if(tasks[i][0] === category){
            if(index >=0 && index < tasks[i][1].length){
                let removedTask = tasks[i][1][index];
                for(let j = index; j < tasks[i][1].length; j++){
                    tasks[i][1][j]= tasks[i][1][j + 1];
                }
                tasks[i][1].length--;
                console.log(`\n Task "${removedTask}" was removed from "${category}" tasks \n` );
                console.log("To do list after removing a task");
                return;
            }
        }
        console.log(`Category "${category}" not found \n`);
    }
}

//function to sort tasks in a category
function sortTasks(category){
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i][0] === category){
            tasks[i][1].sort();
            console.log(`\n"${category}" tasks have been sorted`);
            console.log("To do list after sorting task");
            return;
        }
    }
    console.log(`Category "${category}" not found \n`);
}

//function to search thriough category task 
function searchTask(category,task){
    for (let i = 0;i < tasks.length; i++) {
        if (tasks[i][0] === category){
            let index = tasks[i][1].indexOf(task);
            if(index != -1){
                console.log(`Task "${category}" found at index ${index + 1} in "${category}" task`);
                return;
            }
        }
    }
    console.log(`Task "${task}" not found in "${category}" tasks \n`)
}

console.log("To do list before adding a new task \n")
displayCategorizedTasks()

addCategorizedTasks("Work" , "Complete the presentation")
displayCategorizedTasks();

removeCategorizedTask("Personal", 1);
displayCategorizedTasks();

sortTasks("Work");
displayCategorizedTasks();

searchTask("Work" , "Email the team");
// displayCategorizedTasks();