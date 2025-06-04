// Import async simulation functions from the module "apiSimulator"
import {
  fetchProductCatalog,
  fetchProductReviews,
  fetchSalesReport,

} from "./apiSimulator.js";
// call the function to simulate fetching product catalog
fetchProductCatalog()
  .then((data) => {
    console.log(data); // Log the product catalog
    return fetchProductReviews(12); // then call the function to fetch reviews for product with ID 12
  })
 .then((review) => {
    console.log(review); // Log the fetched product reviews
  return fetchSalesReport(); // then call the function to fetch the sales report
    })

  .then((report) => console.log(report)) // Log the final sales report
  .catch((error) => {
    // Catch any error from any of the above steps
    console.error(`Error message: ${error}`);
  })
  
.finally(() => console.log("Operation completed."));
