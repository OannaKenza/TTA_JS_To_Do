function createTask(title, description ,category){
    // console.log("To do list");
    let completed = false ;
    return{
        title,
        description,
        category,
        // completed: false,

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
        },

        
    }
}

let task1 = createTask("Complete the project", "Finish the project by the end of the week", "Work");
task1.displayDetails();

task1.toggleCompleted();
task1.displayDetails();