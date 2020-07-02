// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}



//==========================
//Kata 0: An example kata
let greenEyes1 = users
    .filter(user => user.eyeColor === 'green');

printKata(0, greenEyes1);


//==========================
// Kata 1: Filter the users array to show only the users with an isActive property of true.
let activeUsers = users
    .filter(user => user.isActive === true);

printKata(1, activeUsers);


//==========================
//Kata 2 Map over the users array to show only the email addresses of the users.

let email_address = users.map(user => user.email);
printKata(2, email_address);


//==========================
//Kata 3  Check whether at least one user in the users array has a company property of "OVATION".
let isOvation = ["No one working in company 'OVATION'"];
let question = users.some(user => user.company === "OVATION");
if (question === true) {
    isOvation = ["At least one person is working in company 'OVATION'"]
}
printKata(3, isOvation);


//==========================
// Kata 4 Find the first user in the array over the age of 38.

let user_38 = users.find(user => user.age === 38);
printKata(4, user_38);


//==========================
// Kata 5 Find the first user in the array over the age of 38 who is active

let user_active_over_38 = users
    .filter(user => user.age > 38)
    .find(user => user.isActive === true);

if (user_active_over_38 === undefined) {
    user_active_over_38 = ['No one active user with age > 38'];
}

printKata(5, user_active_over_38);


//==========================
// Kata 6 Show the balance of every user in the array from the "ZENCO" company.

let balance_ZENCO = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance);

printKata(6, balance_ZENCO);


//==========================
// Kata 7 Show the age of every user with the "fugiat" tag.

let age_fuguat = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age);

    
printKata(7, age_fuguat);