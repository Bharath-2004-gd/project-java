//TACK1

let name = "bharath";
let age = 23;
let department ="b.comism";
let cgpa = 8.75;


console.log("Name;"+name);
console.log("Age:"+age);
console.log("Department :"+department);
console.log("Cgpa:"+cgpa);

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Department: ${department}`);
console.log(`CGPA: ${cgpa}`);


//TACK 2



let a= 20;
let b = 10;

console.log("Addition:"+ (a+b));
console.log("Subtraction:"+ (a-b));
console.log("Multiplication:"+ (a*b));
console.log("Division:"+ (a/b));
console.log("Modulus:"+ (a%b));
console.log("power:"+(a**b));



//TACK 3

let age1 = prompt("Enter your age:");


age1 = Number(age1);

if
 (age1 >= 18) {
    console.log("Eligible to vote");
} 
else
     {
    console.log("Not eligible to vote");
}


//TACK 4

let marks = prompt("Enter your marks:");
marks = Number(marks);

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A");
} else if (marks >= 80 && marks <= 89) {
    console.log("Grade: B");
} else if (marks >= 70 && marks <= 79) {
    console.log("Grade: C");
} else if (marks >= 60 && marks <= 69) {
    console.log("Grade: D");
} else if (marks < 60 && marks >= 0) {
    console.log("Grade: Fail");
} else {
    console.log("Invalid marks entered");
}

// TACK 5
let correctUsername = "admin";
let correctPassword = "1234";

let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === correctUsername && password === correctPassword) {
    console.log("Login successful");
} else if (username !== correctUsername && password === correctPassword) {
    console.log("Invalid username");
} else if (username === correctUsername && password !== correctPassword) {
    console.log("Invalid password");
} else {
    console.log("Invalid credentials");
}

// TACK 6

let balance = 10000;

let amount = prompt("Enter withdrawal amount:");
amount = Number(amount);

if (amount <= 0) {
    console.log("Invalid amount: must be greater than 0");
} else if (amount > balance) {
    console.log("Insufficient balance");
} else if (amount % 100 !== 0) {
    console.log("Invalid amount: must be a multiple of ₹100");
} else {
    balance = balance - amount;
    console.log("Withdrawal successful. New balance: " + balance);
}  

//TACK 7

let num = prompt("Enter a number:");
num = Number(num);

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}



// TACK 8
let num3 = prompt("Enter a number:");
num3 = Number(num3);

let original = num3;
let reversed = 0;

while (num3 > 0) {
    let lastDigit = num3 % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num3 / 10);
}

console.log("Reversed number: " + reversed); 

// TACK 14
let numbers = [10, 45, 23, 89, 12, 67];

let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Task 14 - Maximum:", max);


// TACK 15
let arr = [1, 2, 3, 2, 4, 1, 5];

let unique = [...new Set(arr)];
console.log("Task 15 - Unique values:", unique);
// TACK 16
let employees = [
  { name: "Arun", salary: 30000 },
  { name: "Bala", salary: 50000 },
  { name: "Kumar", salary: 25000 },
  { name: "Ravi", salary: 70000 }
];

let highEarners = employees.filter(emp => emp.salary >= 40000);
console.log("Task 16 - Salary >= 40000:", highEarners);

// TACK 17
let updatedSalaries = employees.map(emp => {
    if (emp.salary < 40000) {
        return { ...emp, salary: emp.salary + 5000 };
    } else {
        return { ...emp, salary: emp.salary + 10000 };
    }
});
console.log("Task 17 - Updated salaries:", updatedSalaries);


//TACK 18
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Task 18 - Total salary:", totalSalary);


// TACK 19
let anyAbove100000 = employees.some(emp => emp.salary > 100000);
console.log("Task 19 - Anyone earning > 100000:", anyAbove100000);

let allAtLeast20000 = employees.every(emp => emp.salary >= 20000);
console.log("Task 19 - Everyone earning >= 20000:", allAtLeast20000);

// TACK 20
let empList = [
  { id: 101, name: "Arun", department: "IT", salary: 35000 },
  { id: 102, name: "Bala", department: "HR", salary: 45000 },
  { id: 103, name: "Kumar", department: "IT", salary: 60000 }
];

// 1. 
console.log("--- Task 20.1: Names ---");
empList.forEach(emp => console.log(emp.name));

// 2.
let itEmployees = empList.filter(emp => emp.department === "IT");
console.log("--- Task 20.2: IT Employees ---", itEmployees);

// 3.
let increasedSalaries = empList.map(emp => ({
    ...emp,
    salary: emp.salary + emp.salary * 0.10
}));
console.log("--- Task 20.3: Increased Salaries ---", increasedSalaries);

// 4.
let foundEmployee = empList.find(emp => emp.salary === 45000);
console.log("--- Task 20.4: Found Employee ---", foundEmployee);

// 5.
let totalEmpSalary = empList.reduce((sum, emp) => sum + emp.salary, 0);
console.log("--- Task 20.5: Total Salary ---", totalEmpSalary);

// 6.
let anyoneAbove50000 = empList.some(emp => emp.salary > 50000);
console.log("--- Task 20.6: Anyone above 50000 ---", anyoneAbove50000);

// 7
let everyoneAbove20000 = empList.every(emp => emp.salary > 20000);
console.log("--- Task 20.7: Everyone above 20000 ---", everyoneAbove20000);

// 8
let sortedBySalary = [...empList].sort((a, b) => b.salary - a.salary);
console.log("--- Task 20.8: Sorted by Salary (desc) ---", sortedBySalary);

// 9.
console.log("--- Task 20.9: Destructured name & salary ---");
empList.forEach(emp => {
    let { name, salary } = emp;
    console.log(name + " earns ₹" + salary);
});

// 10
let newEmployeeList = [...empList, { id: 104, name: "Priya", department: "Finance", salary: 40000 }];
console.log("--- Task 20.10: New Employee List (with spread) ---", newEmployeeList);


console.log("--- Original empList (unchanged) ---", empList);












