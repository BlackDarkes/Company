// const num1 = +prompt("Number 1: ")
// const num2 = +prompt("Number 2: ")
// const znack = prompt("Znack: ")
// switch (znack){
//     case '+':{
//         console.log(num1 + num2)
//         break
//     }

//     case '-': {
//         console.log(num1 - num2)
//         break
//     }

//     case '*':{
//         console.log(num1 * num2)
//         break
//     }

//     case '/':{
//         console.log(num1 / num2)
//         break
//     }

//     default:{
//         console.log("NOT NUMBER")
//     }
// }


// let mess = 0
// while (mess < 10){
//     console.log(Number(mess))
//     mess++
// }

// let count = 10
// do{
//     console.log(+count)
//     count++
// } while (count < 10)


// for (let i = 0; i < 10; i++){
//     console.log(i)
// }



// let count = 0
// while (count < 15){
//     console.log(count)

//     if (count === 8){
//         break
//     }

//     count++
// }


// function calc(numFirst, numLast, sign){
//     switch(sign){
//         case '+':{
//             console.log(numFirst + numLast)
//             break
//         }

//         case '-':{
//             console.log(numFirst - numLast)
//             break
//         }

//         case '*':{
//             console.log(numFirst * numLast)
//             break
//         }

//         case '/':{
//             console.log(numFirst / numLast)
//             break
//         }

//         default:{
//             console.log("NOT NUMBER")
//         }
//     }
// }

// calc(5, 5, '/')


const button = document.querySelector('#button')
const form = document.querySelector('#buttonForm')

button.addEventListener('click', () =>{
    alert('Hello world')
})