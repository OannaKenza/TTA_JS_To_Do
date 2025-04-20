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
            console.log("+-----------------------------------------------------------------+");
            console.log(`\tCategory: ${this.category}`);
            console.log(`\tTask: ${this.title}`);
            console.log(`\tDescription: ${this.description}`);
            console.log(`\t${this.completed ? "Completed" : "Not Completed"}`);
            console.log("+-----------------------------------------------------------------+");
        },
    }
}

let task1 = createTask("Buy groceries", "Get milk,eggs and bread", "Shopping");
task1.displayDetails();

task1.toggleCompleted();
console.log("New task details");
task1.displayDetails();
