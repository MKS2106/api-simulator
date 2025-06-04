// Custom error class to represent network-related failures
class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

// Custom error class to represent data-related issues
class DataError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataError";
  }
}
// function to simulate fetching product from a server (but here data is dummy data)
export function fetchProductCatalog() {
  return new Promise((resolve, reject) => {
    // Mock product data to simulate a server response
    const products = [
      { productId: 12, productName: "Keyboard", productPrice: 40 },
      { productId: 21, productName: "Monitor", productPrice: 150 },
      { productId: 31, productName: "Speaker", productPrice: 500 },
    ];
    // Simulate network success/failure with 80/20 probability
    if (Math.random() < 0.8) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject(new NetworkError("Failed to fetch the product catalog"));
    } // In case of failure, return a custom network error
  });
}
// function to simulate fetching product review from a server (but here data is dummy data)
export function fetchProductReviews(productId) {
  return new Promise((resolve, reject) => {
    const reviews = [
      { Review1: `product with ID ${productId} : This product is awesome!` },
      {
        Review2: `Product with ID${productId} : This product is not as expected!`,
      },
    ];

    // throw new Error("reviews not found")
    if (Math.random() < 0.8) {
      setTimeout(() => {
        resolve(reviews);
      }, 1500);
    } else {
      reject(new DataError("Failed to get review for the product"));
    } // In case of failure, return a custom data error
  });
}
// Function that simulates fetching a sales report from a server
export function fetchSalesReport() {
  return new Promise((resolve, reject) => {
    // Mock sales report data
    const salesReport = { totalSales: 2000, unitsSold: 25, averagePrice: 250 };
    // Simulate 80% chance of success and 20% chance of failure
    if (Math.random() < 0.8) {
      setTimeout(() => {
        resolve(salesReport);
      }, 1000);
    } else {
      reject("Failed to fetch the sales report"); // Simulated failure
    }
  });
}
