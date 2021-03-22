let input = prompt('What would you like to do?');
const toDoList = ['read', 'tan'];

while(input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('*****************')
        for(let i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]}`);
        }
        console.log('*****************')
    } else if(input === 'new') {
        const newToDo = prompt('Enter New Todo');
        toDoList.push(newToDo);
        console.log(`${newToDo} added to the list`);
    } else if(input === 'delete') {
        const index = parseInt(prompt('What are you going to delete?'));
        if (!Number.isNaN(index)) {
        const deleted = toDoList.splice(index, 1);
        console.log(`Okay, you delete ${deleted[0]}`); }
        else {
            console.log('Unknown');
        }
    }
    input = prompt('What would you like to do?');
}
console.log('OK, YOU QUIT THE APP');

/* while(true){
    guess = prompt('What would you like to do?');
    guess += toDoList;
    if(guess.toLowerCase = "quit") {
        break;
        console.log('OK, YOU QUIT THE APP');
    }
}
*/