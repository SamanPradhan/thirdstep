let loginUserToken = localStorage.getItem("loginUser") || false;
console.log("loginUserToken:", loginUserToken);
let login_name = JSON.parse(localStorage.getItem("login_name")) || [];
let cartData = JSON.parse(localStorage.getItem("productsAdd")) || [];

//search functionality
let searchquery=document.getElementById("searchquery")
let searchbtn=document.getElementById("searchbtn")
//cursor pointer css using js
searchbtn.addEventListener("mouseover",()=>{
    searchbtn.style.cursor="pointer";
})
//cursor pointer css end
searchbtn.addEventListener("click",()=>{
    localStorage.setItem("searchValue",searchquery.value)
    window.location.href="menu.html";
})
