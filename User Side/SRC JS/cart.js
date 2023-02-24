let total=document.getElementById("total");
let count=document.getElementById("count");
let amt=document.getElementById("amount");
let coupon=document.getElementById("coupon");
let apply=document.getElementById("app");
let empty = document.getElementById("empty");
let myCart = JSON.parse(localStorage.getItem("product")) || {};
let cartData = JSON.parse(localStorage.getItem("productsAdd")) || [];
let sum=0,s=0,sum1=0;
display(cartData);
function display(data) {
  empty.innerHTML = "";
  data.forEach((element) => {
    let box=document.createElement("div")
    let products = document.createElement("div");
    let productDetails = document.createElement("div");
    let productAmount = document.createElement("div");
    let btn = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", element.image1);

    let brand = document.createElement("h5");
    brand.innerText = element.brand;

    let gender = document.createElement("h5");
    gender.innerText = element.gender;

    let name = document.createElement("h4");
    name.innerText = element.name;

    let price = document.createElement("h4");
    price.innerText = `₹${element.price}`;

    let quantity = document.createElement("span");
    quantity.innerText=element.quantity;

    let Increment = document.createElement("button");
    let Decrement = document.createElement("button");

    Increment.textContent = "+";
    Decrement.textContent = "-";

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    // ------------------Remove------------------------

    remove.addEventListener("click", () => {
      cartData = cartData.filter((ele) => {
        return ele.id !== element.id;
      });
      localStorage.setItem("productsAdd", JSON.stringify(cartData));
      display(cartData);
    });

    Increment.addEventListener("click", () => {
      element = element.quantity++;
      localStorage.setItem("productsAdd", JSON.stringify(cartData));
      display(cartData);
    });

    Decrement.addEventListener("click", () => {
      if (element.quantity > 1) {
        element = element.quantity--;
        localStorage.setItem("productsAdd", JSON.stringify(cartData));
        display(cartData);
      }
    });
    btn.append(remove);
    products.append(img);
    productDetails.append(name,brand, gender);
    productAmount.append(price, Decrement,quantity, Increment, btn);
    box.append(products, productDetails, productAmount);
    empty.append(box)
  });
  
   sum=0;
   s=0;
   sum1=0;
  for(let i=0;i<cartData.length;i++)
  {
    sum+=cartData[i].price*cartData[i].quantity;
    s+=cartData[i].quantity;
  }
  sum1=sum+0;
  count.textContent=s;
  total.textContent=sum;
  // console.log(sum1)
   amt.textContent=sum1;

}
apply.addEventListener("click",()=>{
  let pro=prompt("Enter Code")
  if(pro=='masai20'){
    sum1=Math.floor(sum1*0.8);
    amt.textContent=sum1;
    apply.innerText="Applied"
  }
  else{
    amt.textContent=sum1;
  }
})
