
let empty=document.querySelector("#empty")
 let myCart=JSON.parse(localStorage.getItem("product"))||{};
 console.log(myCart)
// display(myCart);
// function display(data)
    
// {
  empty.innerHTML=""
   // data.forEach(element => {
    let products=document.createElement("div")
    let productDetails=document.createElement("div")
    let productAmount=document.createElement("div")
    let btn=document.createElement("div")

    let img=document.createElement("img")
    img.setAttribute("src","https://www.famousfootwear.com/blob/product-images/20000/76/83/5/76835_pair_medium.jpg")

    let brand=document.createElement("h2")
    brand.innerText="Vans";

    let gender=document.createElement("h3")
    gender.innerText="Female";

    let name=document.createElement("p")
    name.innerText="Women's Ward Low Top Platform Sneaker";

    let price=document.createElement("h1")
    price.innerText=   `₹999`;

    let quantity = document.createElement("span");
    quantity.innerText=1;

    let Increment = document.createElement("button");
    let Decrement = document.createElement("button");

    Increment.textContent="+"
    Decrement.textContent="-"
    
    let remove=document.createElement("button")
    remove.innerText="Remove"
    // ------------------Remove------------------------

    remove.addEventListener("click",()=>{
    myCart=myCart.filter((ele)=>{
      return ele.id!==element.id
    })
    localStorage.setItem("product",JSON.stringify(myCart))
    display(myCart)
    })

  Increment.addEventListener("click", () => {
    element=element.quantity++
  localStorage.setItem("product",JSON.stringify(myCart))
  display(myCart)
});

Decrement.addEventListener("click", () => {
  if(element.quantity>1){
    element=element.quantity--
  localStorage.setItem("product",JSON.stringify(myCart))
  display(myCart)
  }
});
  btn.append(remove)
  products.append(img)
  productDetails.append(brand,gender,name)
  productAmount.append(price,Decrement,quantity,Increment,btn)
  empty.append(products,productDetails,productAmount) 

// });


// }

