// const post = {
//     name: "Binay",
//     content: "This is my first post",
//     post: 7,
//     tags: ["kunja", "yellow"],
//     likes: 278
// };

// const studentInfo = {
//     Binay: {
//         grade: "A+",
//         city: "Bhubaneswar"
//     },
//     sradha: {
//         grade: "D-",
//         city: "Delhi"
//     },
//     kunja: {
//         grade: "A",
//         city: "Kendujhar"
//     }
// };

// let studentInfo = [
//     {
//         name: "Binay",
//         grade: "A+",
//         city: "Bhubaneswar"
//     },
//     {
//         name: "sradha",
//         grade: "D-",
//         city: "Delhi"
//     },
//     {
//         name: "Kunja",
//         grade: "A",
//         city: "Kendujhar"
//     }
// ];

const max = prompt("Enter the maximum number");

const random = Math.floor( Math.random() * max ) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit") {
        console.log("you quit the game");
        break;
    }

    if(guess == random) {
        console.log("congrats you guess the right", random);
        break;
    }

    else if(guess < random) {
        guess = prompt("small number");
    } else {
        guess = prompt("larger number");
    }
}