# Async Simulation: Promises and Error Handling in JavaScript

This project demonstrates the use of JavaScript **Promises**, **error handling**, and **simulated API calls** using asynchronous functions. It mimics real-world data fetching scenarios like product catalogs, reviews, and sales reports with a success/failure mechanism.

## The challenge
To build a small application that leverages asynchronous API calls using Promises. You will also implement error handling to ensure that the application can manage unexpected issues gracefully

Your users should be able to:

- Apply Promises to manage multiple asynchronous operations in JavaScript.
- Implement chained Promises to handle sequential data retrieval and manage dependencies between API calls.
- Utilize .catch() and .finally() to handle errors and perform cleanup tasks in a Promise chain.
- Design custom error classes to improve error identification and debugging.


## Project Structure
/project(mod-6/lab2)
│
├── index.html # Basic HTML page
├── main.js # Main script to run the promise chain
├── apiSimulator.js # Simulated API functions using Promises
└── README.md

## Features
- Simulated asynchronous API calls
- Custom error classes for clearer error handling
- Promise chaining with `.then()`, `.catch()`, and `.finally()`
- Randomized success/failure logic to mimic real network behavior

## 🔧 How It Works

### 1. `fetchProductCatalog()`
Fetches a list of products. Has an 80% chance to succeed.

### 2. `fetchProductReviews(productId)`
Takes a product ID and fetches reviews. Also has an 80% chance to succeed.

### 3. `fetchSalesReport()`
Returns a sales summary. Again, has an 80% success rate.

### If any of the above steps fail, a custom error is thrown and caught in the `.catch()` block.

## How to Run
1. Clone or download the project.
2. Open `index.html` in a browser with developer tools open (Console tab).
3. Reload the page to see simulated outputs — including possible failures.
4. Check the Console for outputs and errors.

- Comments: README file is influenced by frontend mentor challenge projects README. 
