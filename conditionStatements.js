

const balance = 1000;
const jeans = 40;

const buyItem = () => {
    if(jeans <= balance){
        // code that will execute if condition true
        console.log('You have enough money to purchase the item!');
    } else {
        // code that will execute if condition false
        console.log("You don't have enough money to purchase the item!")
    }
}

buyItem();

let grade = 10;

if(grade >= 90) {
    console.log('A');
} else if (grade >= 80) {
    console.log('B');
} else if(grade >= 70) {
    console.log('C');
} else if(grade >= 60) {
    console.log('D')
} else {
    console.log('F');
}

// set age of user

let age = 19;

// Place result of tenart operation in a variable

const oldEnough = (age >=21) ? {description: 'Adult'} : {data: 'Young boy!'};

console.log(oldEnough);

