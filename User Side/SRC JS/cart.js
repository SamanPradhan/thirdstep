let empty = document.getElementById("empty");
let myCart = JSON.parse(localStorage.getItem("product")) || {};
let cartData = JSON.parse(localStorage.getItem("productsAdd")) || [];
console.log(myCart);
display(cartData);
function display(data) {
  empty.innerHTML = "";
  data.forEach((element) => {
    let products = document.createElement("div");
    let productDetails = document.createElement("div");
    let productAmount = document.createElement("div");
    let btn = document.createElement("div");

    let img = document.createElement("img");
    img.setAttribute("src", element.image1);

    let brand = document.createElement("h2");
    brand.innerText = element.brand;

    let gender = document.createElement("h3");
    gender.innerText = element.gender;

    let name = document.createElement("p");
    name.innerText = element.name;

    let price = document.createElement("h1");
    price.innerText = `₹${element.price}`;

    // let quantity = document.createElement("span");
    // quantity.innerText=data.image1;

    let Increment = document.createElement("button");
    let Decrement = document.createElement("button");

    Increment.textContent = "+";
    Decrement.textContent = "-";

    let remove = document.createElement("button");
    remove.innerText = "Remove";
    // ------------------Remove------------------------

    remove.addEventListener("click", () => {
      myCart = myCart.filter((ele) => {
        return ele.id !== element.id;
      });
      localStorage.setItem("product", JSON.stringify(myCart));
      display(myCart);
    });

    Increment.addEventListener("click", () => {
      element = element.quantity++;
      localStorage.setItem("product", JSON.stringify(myCart));
      display(myCart);
    });

    Decrement.addEventListener("click", () => {
      if (element.quantity > 1) {
        element = element.quantity--;
        localStorage.setItem("product", JSON.stringify(myCart));
        display(myCart);
      }
    });
    btn.append(remove);
    products.append(img);
    productDetails.append(brand, gender, name);
    productAmount.append(price, Decrement, Increment, btn);
    empty.append(products, productDetails, productAmount);
  });
}
