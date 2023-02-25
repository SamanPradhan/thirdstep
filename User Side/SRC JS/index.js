let loginUserToken = localStorage.getItem("loginUser") || false;
console.log("loginUserToken:", loginUserToken);
let login_name = JSON.parse(localStorage.getItem("login_name")) || [];
let cartData = JSON.parse(localStorage.getItem("productsAdd")) || [];
