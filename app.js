// let todo =[];
// let req= prompt("please enter your request");
// //console.log( req );

//  while(true){
//     if( req == "quit"){
//         console.log("quitting qpp");
//         break;
//     }

//     if( req == "list"){
//         console.log("--------------------------------------------------")
//        //for(task of todo)
//         for(let i=0; i<todo.length; i++){
//             console.log(i, task[i]);
//         }
//         console.log("--------------------------------------------------")
//     }
//     else if( req == "add"){
//         let task = prompt("Please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");

//     }
//     else if(req =="delete"){
//         let idx = promt("Please enter the taks index");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("wrong request");
//     }



//     let req = prompt("please enter your request");
//  }

let todo = [];

let req = prompt("please enter your request");

while (true) {
    if (req == "quit") {
        console.log("quitting app");
        break;
    }

    if (req == "list") {
        console.log("--------------------------------------------------");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("--------------------------------------------------");
    } else if (req == "add") {
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if (req == "delete") {
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}
