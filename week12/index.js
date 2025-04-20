function createTask(title, description ,category){
    // console.log("To do list");
    return{
        title,
        description,
        category,
        completed: false,

        toggleCompleted(){
            this.completed = !this.completed;
        },

        displayDetails(){
            // console.log("+-----------------------------------------------------------------+");
            console.log(`\tCategory: ${this.category}`);
            console.log(`\tTask: ${this.title}`);
            console.log(`\tDescription: ${this.description}`);
            console.log(`\t${this.completed ? "Completed" : "Not Completed"}`);
            //console.log("+-----------------------------------------------------------------+");
        },

        updateTitle(newTitle){
            this.title = newTitle;
            console.log(`Task title updated successfully`);
        },
        
        updateDescription(newDescription){
            this.description = newDescription;
            console.log(`Task description updated successfully`);
        },

        updateCategory(newCategory){
            this.category = newCategory;
            console.log(`Task category updated successfully`);
        }
    }
}

function createWorkTask(title,description,deadline){
   let task = createTask(title,description,"Work");
    return{
        ...task,
        deadline,

        toggleCompleted(){
            task.toggleCompleted();
        },

        displayDetails(){
          task.displayDetails();
            console.log(`\tDeadline: ${this.deadline}`);
        },
    }
}

function createPersonalTask(title,description,priority){
    let task = createTask(title,description,"Personal");
    return{
        ...task,
        priority,

        toggleCompleted(){
            task.toggleCompleted();
        },

        displayDetails(){
          task.displayDetails();
            console.log(`\tPriority: ${this.priority}`);
        },
    }
}

function displayTaskDetail(task){
    task.displayDetails();

}

let task1 = createTask("Buy groceries", "Get milk,eggs and bread", "Shopping");
console.log("+-----------------------------------------------------------------+");
task1.displayTaskDetails(task1);
console.log("+-----------------------------------------------------------------+");

let task2 = createWorkTask("Finish project", "Complete the final report", "friday");
console.log("Work related task");
console.log("+-----------------------------------------------------------------+");
task2.displayTaskDetails(task2);
console.log("+-----------------------------------------------------------------+");

task2.toggleCompleted();
console.log("+-----------------------------------------------------------------+");
task2.displayDetails();
console.log("+-----------------------------------------------------------------+");

let task3 = createPersonalTask("Go to gym", "Workout for 1 hour", "High");
console.log("Personal related task");
console.log("+-----------------------------------------------------------------+");
task3.displayTaskDetails(task3);
console.log("+-----------------------------------------------------------------+");

task3.toggleCompleted();
console.log("+-----------------------------------------------------------------+");
task3.displayDetails();
console.log("+-----------------------------------------------------------------+");