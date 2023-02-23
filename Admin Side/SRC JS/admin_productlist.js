 // Fetch and Render
 let url = "https://63c77a71e52516043f3eaecd.mockapi.io/beverage";
 
     let cartArr = JSON.parse(localStorage.getItem("product")) ||" ";
 
 
     // console.log(Data)
     let mainSection = document.getElementById("product-container");
     mainSection.textContent = "";
 
     
         let card = document.createElement("div")
 
         let productImg = document.createElement("img")
         productImg.src = `${el.image}`;
        let brand = document.createElement("h3")
        brand.innerText = `${el.brand}`;
        let gender = document.createElement("h2")
        gender.innerText = `${el.gender}`;
         let name = document.createElement("h1")
         name.innerText = `${el.name}`;
 
         let price = document.createElement("h3")
         price.innerText = `${el.price}`;
         let size = document.createElement("h3")
         size.innerText = `${el.size}`;
 
         let btn = document.createElement("button")
         btn.innerText = "Add to cart"
         btn.addEventListener("click", function () {
             // addTocart(el);
             alert("Product Successfully added to Cart");
             cartArr.push(el);
             localStorage.setItem("Cart", JSON.stringify(cartArr));
             // window.location.href="cart.html"
         });
 
 
         card.append(productImg, brand,gender,name, price,size, btn)
 
         document.querySelector("product-container").append(card);
     
 