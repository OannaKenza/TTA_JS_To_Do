class Task {
    constructor(title,description,category){
        this.title =title;
        this.description =description;
        this.category=category;
        this.completed =false;
    }

    toggleCompleted(){
        this.completed =!this.completed;

    }

    displayDetails(){
        console.log("+----------------------------------------------------------------------------+");
        console.log(`\tCategory:${this.category}`)
        console.log(`\tTask:${this.title}`);
        console.log(`\tDescription:${this.description}`);
        // console.log(`\tCompleted:${this.completed}`);
        // if(this.completed){
        //     console.log("\tTask is completed");
        // }else{
        //     console.log("\tTask is not completed");
        // }

        console.log(`${this.completed ? "\tTask is completed" : "\tTask is not completed"}`)
        console.log("+-----------------------------------------------------------------------------+");
    }

    // updateTask(newTtitle,newDescription,newCategory){
    //     this.title=newTtitle;
    //     this.description=newDescription;
    //     this.category=newCategory;
    //     console.log("Task updated successfully");

    //}

    updateTaskTitle(newTitle){
        this.title = newTitle;
        console.log("\tTask title updated successfully");
    }
    updateTaskDescription(newDescription){
        this.description = newDescription;
        console.log("\tTask description updated successfully");
    }
    updateTaskCategory(newCategory){
        this.category = newCategory;
        console.log("\tTask category updated successfully");
    }

}


let task1 = new Task("Buy grocceries", "Get milk,bread and eggs from the store.","Shopping task");

task1.displayDetails();

task1.updateTaskTitle("Buy grocceries - 1");
console.log("\tUpdated task details");

task1.toggleCompleted();

console.log("\tNew task details");
task1.displayDetails();