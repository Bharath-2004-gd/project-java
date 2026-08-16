// TACK 1

let salary = 30000;
let bonus = 5000;
let tax = 2000;

let finalSalary = salary +bonus-tax

console.log("finalSalary:"+finalSalary);



//TACK 2

let a = 10;//A = 12
let b = a++;//A= 10 ,A++ = 11
let c = ++a;//++A = 12


console.log(a);//12
console.log(b);//10
console.log(c);//12


//TACK 3

console.log(10 > 5 && 20 < 10 || 5 === "5"); //false
console.log(10 < 5 || 20 >= 20 && 5 == "5");//true
console.log(!(10 > 5));//false


//TACK 4


let balance = 10000;
let withdrawal = 2500;

if (withdrawal <= 0) {
    console.log("Error: Withdrawal amount must be greater than 0.");
}
 else if (withdrawal > balance) {
    console.log("Error: Insufficient balance.");
} 
else if (withdrawal % 100 !== 0) {
    console.log("Error: Withdrawal amount must be a multiple of 100.");
} 
else {
    balance = balance - withdrawal;
    console.log("Withdrawal successful!");
    console.log("Remaining Balance: " + balance);
}


// TACK 5

let mark =78

if (mark >= 90 && mark<=100){
    console.log("grade:A");
    

}


 else if (mark >=80 && mark <=89){
    console.log("grade:B");
    

}

 else  if (mark >= 70 && mark <=79){
    console.log("grade:C");
    

}

else if (mark >= 60 && mark<69){
    console.log("grade:D");
    

}
else{
    console.log("fail:");
    
}


//TACK 6

let username = "admin";
let password = "1234";
let otp = 5555;

let inputUsername = "admin";
let inputPassword = "1234";
let inputOtp = 5555;

if (inputUsername === username) {
    if (inputPassword === password) {
        if (inputOtp === otp) {
            console.log("Login successful");
        } 
        else {
            console.log("Error: Incorrect OTP.");
        }
    } 
    else {
        console.log("Error: Incorrect password.");
    }
}
 else {
    console.log("Error: Incorrect username.");
}


// tack 7
for ( i=1; i<=10 ;i++){
    console.log(i);
    

   // for loop
}
// for ( g=1;g< 50;g++)
 //{
  //  console.log(g);
    
 //}


 //for loop

//for( h =10;h>0;h--)
//{ 
  
//console.log(h);
    
//}



// TACK 8
//let numbere = 7
//let numbere1 = 7*1;
//console.log(numbere1);

let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}


//let nub = 8;


//for ( let j=1; j<=10; j++){
   // console.log(nub +" x " + j+ "="+(nub*j));
    
//}




// TACK 9

let k=10
while(k>= 0){
    console.log(k);
    k--
    
}


//let f=0;


//while(f<=10){
  //  console.log(f);


   // f++
    
//}





//TACK 10

let correctOTP = 1234;
let attempts = 0;
let verified = false;

while (attempts < 1) {
  let userInput = parseInt(prompt("Enter OTP:"));
  attempts++;

  if (userInput === correctOTP) {
    verified = true;
    break;
  } else {
    console.log(`Incorrect OTP. Attempts left: ${1 - attempts}`);
  }
}

if (verified) {
  console.log("OTP verified");
} else {
  console.log("Account blocked");
}



// TACK 11
let fruits = ["apple", "banana", "orange", "grapes", "mango"];


for( let d=0; d< fruits.length; d++){
    console.log(fruits[d]);
    
}
console.log(" frist FRUITS:"+fruits[0]);
console.log("last FRUITS:"+fruits[fruits.length-1]);


//let fruits12 = ["apple", "banana", "orange", "grapes", "mango"];  


//for( let f11=0;f11<fruits12.length;f11++){
   // console.log(fruits12[f11]);
    
//}

//console.log("secd fruits12:" + fruits12[1]);
//console.log("third fruits12 :"  +  fruits12[fruits12.length-2]);


// TACK 12



let employee = {
    name: "Arun",
    empId: "STK-101",
    role: "Developer",
    salary: 45000
};

for( let key in employee){
console.log(key+ ":"+ employee[key]);

}



//TACK 13

function calculator(a, b, operator) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return a / b;
    case "%": return a % b;
    default: return "Invalid operator";
  }
}

console.log(calculator(20, 5, "+")); 
console.log(calculator(20, 5, "*")); 
//console.log(calculator(20,5,"/"));




// TACK 14

function salaryDetails(salary, bonus) {
    return  salary +bonus;
}


console.log(salaryDetails(40000,5000));



//TACK 15

function employee1(name, role = "Trainee") {
  console.log(name+"-"+role);
  
} 

employee1("bharath");
employee1("bharath", "developer");
//employee1("hhhh","jjjjj")


//TACK 16

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function calculate(a, b, callback) {
  let sum = a + b; // perform addition first
  return callback(sum, 0); // then call the callback (example usage)
}

// More typical usage: pass a, b directly to the callback operation
function calculateOp(a, b, callback) {
  return callback(a, b);
}

console.log(calculateOp(10, 5, add)); 
console.log(calculateOp(10, 5, sub)); 
console.log(calculateOp(10, 5, mul));





// TACK 17 
function* rewardGenerator() {
  yield "₹100 Cashback";
  yield "10% Discount";
  yield "₹500 Cashback";
  yield "20% Discount";
  yield "Better Luck Next Time";
  //yield " sorry ";
}



let rewards = rewardGenerator();



console.log(rewards.next().value);

console.log(rewards.next().value);

console.log(rewards.next().value);

console.log(rewards.next().value);

console.log(rewards.next().value);

//console.log(rewards.next().value);


// TACK 18

let frontend = ["HTML", "CSS", "JavaScript"];
let backend = ["Node", "Express", "MongoDB"];


let fullstack = [...frontend,...backend] ;
console.log(fullstack);



//let frontend1= ["hjjj", "bharath", "bhhh"];
//let backend1= ["jjd", "djchjhi", "bhufdvbh"];


//let fullstack1 = [...frontend1,... backend1]

//console.log(fullstack1);



//TACK 19

let student = ["Arun", "ECE", 8.5, "Developer"];


let [name ,del,cgp,role]=student;

console.log(name,del,cgp,role);




//let village = ["hari","bharath","vinoth","sandeep"]
//let [nam1,nam2,nam3,nam4]=village


//console.log(nam1,nam2,nam3,nam4);



// Nested Object Destructuring


//  TACK 20


let company = {
    name: "Stackly",
    employee: {
        name: "Arun",
        role: "Developer",
        salary1: 50000
    }
};



let {employee:{name:employeename,role:employeerole,salary1:emplsalary1}}=company;
console.log(employeename,employeerole,emplsalary1);











  
















