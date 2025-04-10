let tasks = [" Buy milk " , " Clean the room " , " Go to the gym "];

console.log('Tasks on my To do list')
console.log("1. " +tasks[0]);
console.log(`2. ${tasks[1]}`);
console.log("3. " +tasks[2]);

tasks.push(" Do the laundry");
console.log("4. " +tasks[3]);

console.log(tasks);

tasks.pop();
console.log(tasks);

tasks.shift();
console.log(tasks)

tasks.unshift("cooking");
console.log(tasks)

tasks.splice(1 ,1 );
console.log(tasks);
  
tasks.splice(1 , 0 ," wash the dishes ");
console.log (tasks)
