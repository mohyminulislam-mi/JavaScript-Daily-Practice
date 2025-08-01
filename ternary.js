// normal if-else
// let age = 16;
// if (age >=18){
//     console.log("vote dite jaio")
// }
// else{
//     console.log("agee boro hou")
// }

// simple ternary
let age = 16;
age >= 18 ? console.log("vote dite jaio") : console.log("agee boro hou")

// simple ternary
let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else {
    price = price + 100;
}
console.log(price)

// price = isLeader === true ? 0 : price + 100;