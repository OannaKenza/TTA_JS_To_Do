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

let task1 = createTask("Buy groceries", "Get milk,eggs and bread", "Shopping");
task1.displayDetails();

task1.toggleCompleted();
console.log("| \t New task details \t |");
task1.displayDetails();

task1.updateTitle("Buy groceries -1");
console.log("\t Updated task details \t");
task1.displayDetails();

task1.updateDescription("Get milk,eggs and bread -1");
console.log("\t Updated task details \t");
task1.displayDetails();

task1.updateCategory("Shopping -1");
console.log("\t Updated task details \t");
task1.displayDetails();
