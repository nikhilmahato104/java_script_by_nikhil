let todo = [];

let req = prompt("enter your request");

while (true) {
    if (req === "quit") {
        console.log("user is quit");
        break;
    }

    if (req === "list") {
        console.log("--------------");
        for (let i = 0 ;i<=todo.length-1;i++) {
            console.log(i,todo[i]);
        }
        console.log("-------------");
    } else if (req === "add") {
        let task = prompt("enter your task");
        todo.push(task);
        console.log(`Added task: ${task}`);
    }

    else if(req === "delete")
    {
        let idx = prompt("enter index number");
        todo.splice(idx,1);
        console.log("task deleted");
    }

    else{
        console.log("wrong request");
    }
    req = prompt("enter your request"); // Changed 'let req' to 'req ='
}
