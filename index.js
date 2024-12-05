// 1. customerName
var customerName = 'bob';

// 2.upper case
function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
  }
  
//3. setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declare bestCustomer in global scope
  }
  
  //4. bestCustomer
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }

  // 5. leastFavoriteCustomer
  const leastFavoriteCustomer = 'AUG';

  function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Bob';
  }