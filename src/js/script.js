let userName = "Andrew"
let userAge = 21
const userPets = ["Cat", "Dog"];
let userBalance = 1200;
const EVERY_DAY_SPENDING = 15.3;
let everyDaySpendingPerPet = 2.4;
let daysSurvived = 0;

while (userBalance > 0) {
	let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
	userBalance -= spending
	daysSurvived++
}

console.log("User have sufficient money for " + daysSurvived + " days")

//console.log("Text", variable) //allows you to write to the console
console.log(userPets)
console.log(userBalance)
console.log(EVERY_DAY_SPENDING)
console.log(everyDaySpendingPerPet)
console.log(daysSurvived)
console.log("User Name", userName)
console.log("User Age", userAge)

function nameVertical(name) {
    console.log(name)
    for (const key in name) {
        if (!Object.hasOwn(name, key)) continue;
        
        console.log(name[key])
        
    }
 }
// Sarah for example
nameVertical("Sarah")

function code(n) {
   /* if (n<100) return ("Not a valid code");
    
    switch (true) {
        case 100<=n<200:
            return "Informational responses";
        case 200<=n<300:
            return "Successful responses";
        case 300<=n<400:
            return "Redirection messages";
        case 400<=n<500:
            return "Client error responses";
        case 500<=n<600:
            return "Server error responses";
        default:
            return("Not a valid code");
    }
 */
    return (n<100)? "Not a valid code":
    (n<200)? "Informational responses":
    (n<300)? "Successful responses":
    (n<400)? "Redirection messages":
    (n<500)? "Client error responses":
    (n<600)? "Server error responses":
    "Not a valid code"
}
// for example n = 121
console.log(code(221));

function compareVariables(var1, var2) {
    (var1===var2)? console.log("The two variables have the same value and type"):
    (var1==var1)? console.log("The two variables have the same value but not the same type, the type of var1 is "+typeof(var1)+" type, the type of var2 is "+typeof(var2)+" type."):
    console.log("The two variables do not have the same value nor the same type")
}

// After completing the function, pass different values instead of var1 and var2 to test your function

compareVariables (5, 5);

function fibonacci(n) {
        let lsum=1;
        let llsum=0;
        while (llsum<=n) {
            const sum =llsum+lsum
            llsum=lsum
            lsum=sum  
            console.log(llsum)
        }
}

// After completing the function pass different numbers instead of n and test the result.

fibonacci(40);

let courses = ["WAD", "SoftwareEngineering", "WebSecurity", "OOP"];
let i = 0;

for (;;) {
    if (i==courses.length) break;
    console.log(courses[i])
    i++
}