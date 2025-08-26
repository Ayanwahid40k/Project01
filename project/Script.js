// alert("Welcome To Your Own Juice Shop");

// // User inputs
// let juice = prompt("Select your Flavor: Orange, Apple, Mango");
// let quantity = +prompt("Enter number of Glass");
// let size = prompt("Select Glass Size: Small, Medium, Large");
// let sugar = prompt("Sugar option: Extra Sugar or No Sugar");

// // Price variables
// let juicePrice;
// let glassPrice;
// let sugarPrice;

// // Juice price
// if (juice === "Orange") {
//     juicePrice = 150;
// } else if (juice === "Apple") {
//     juicePrice = 120;
// } else if (juice === "Mango") {
//     juicePrice = 100;
// } else {
//     juicePrice = 0;
// }

// // Glass size price
// if (size === "Small") {
//     glassPrice = 50;
// } else if (size === "Medium") {
//     glassPrice = 100;
// } else if (size === "Large") {
//     glassPrice = 150;
// } else {
//     glassPrice = 0;
// }

// // Sugar price
// if (sugar === "Extra Sugar") {
//     sugarPrice = 20;
// } else if (sugar === "No Sugar") {
//     sugarPrice = 0;
// } else {
//     sugarPrice = 0;
// }

// // Total calculations
// let pricePerGlass = juicePrice + glassPrice + sugarPrice;
// let totalPrice = pricePerGlass * quantity;

 
// ICE-CREAM BILL GENERATOR

alert("Welcome To Your Own Juice Shop");

// User inputs
let juice = prompt("Select your Flavor: Orange, Apple, Mango");
let quantity = +prompt("Enter number of Glass");
let size = prompt("Select Glass Size: Small, Medium, Large");
let sugar = prompt("Sugar option: Extra Sugar or No Sugar");

// Price variables
let juicePrice;
let glassPrice;
let sugarPrice;

// Juice price
if (juice === "Orange") {
    juicePrice = 150;
} else if (juice === "Apple") {
    juicePrice = 120;
} else if (juice === "Mango") {
    juicePrice = 100;
} else {
    juicePrice = 0;
}

// Glass size price
if (size === "Small") {
    glassPrice = 50;
} else if (size === "Medium") {
    glassPrice = 100;
} else if (size === "Large") {
    glassPrice = 150;
} else {
    glassPrice = 0;
}

// Sugar price
if (sugar === "Extra Sugar") {
    sugarPrice = 20;
} else if (sugar === "No Sugar") {
    sugarPrice = 0;
} else {
    sugarPrice = 0;
}

// Total calculation
let pricePerGlass = juicePrice + glassPrice + sugarPrice;
let totalPrice = pricePerGlass * quantity;

// Final Output: only total
console.log(totalPrice);
