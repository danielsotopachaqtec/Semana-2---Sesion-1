// let value = 500;

// switch(value) {
//     case 200:
//     // execute case x code block
//     console.log('Su operacion ha sido exitosa!');
//     break;
//     case 400:
//     // excute case x code block
//     console.log('Su operacion no pudo realizar en este momento, contacte al administrador de sistemas!')
//     break;
//     default:
//     // execute default code block
//     console.log('Servidor no disponible');
// }


// const day = new Date().getDay();
// console.log('day', day)

// switch(day) {
//     case 1:
//         console.log('Happy Monday');
//         break;
//     case 2:
//         console.log("It's Tusday. You got this!");
//         break;
//     case 3:
//         console.log('Hump day already');
//         break;
//     case 4:
//         console.log("Just one more day 'til the weekend!");
//         break;
//     case 5:
//         console.log('Happy Friday!');
//         break;
//     case 6:
//         console.log("Have a wonderfull Saturday!");
// }

// const month = new Date().getMonth();

// switch(month){
//     // January,February, March
//     case 0:
//     case 1:
//     case 2:
//         console.log('Winter');
//         break;
//     // April, May, June
//     case 3:
//     case 4:
//     case 5:
//         console.log('Spring');
//         break;
//     // July, August, September
//     case 6:
//     case 7:
//     case 8:
//         console.log('Summer');
//         break;
//     // October, November, December
//     case 9:
//     case 10:
//     case 11:
//         console.log('Autumn');
//         break;
//     default:
//         console.log('Something went wrong!');
// }

// Set the student grade
const grade = 90;

switch(true){
    // if score is 90 or greater
    case grade >= 90:
        console.log('A')
        break;
    case grade >= 80:
        console.log('B');
        break;
    case grade >= 70:
        console.log('C');
        break;
    case grade >= 60:
        console.log('D');
        break;
    case grade >= 50:
        console.log('F');
        break;
    // Anything 59 or below is falling
    default:
        console.log('F');
}