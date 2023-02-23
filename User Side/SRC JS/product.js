let productdata = JSON.parse(localStorage.getItem("product")) || {};
let cartData = JSON.parse(localStorage.getItem("productsAdd")) || [];
let JSON_flag_signin = JSON.parse(localStorage.getItem("login")) || true;
let container = document.getElementById("product-container");

console.log(productdata);

container.innerHTML = ` <div id="roll">
<p>Shoes / ${productdata.gender}/Sneakers and Athletic Shoes / Lifestyle and Fashion Sneakers</p>
</div>
<div id="cont">
<!-- <img src="${productdata.image1}" alt=""> -->
<img src="${productdata.image2}" alt="">
</div>
<div id="box">
<h1>Women's Ward Low Top Platform Sneaker</h1>
<h2 id="gender">${productdata.gender}</h2>
<h3 id="price">₹${productdata.price}</h3>
<h3 id="brand">${productdata.brand}</h3>
<h3 id="size">${productdata.size}</h3>
</div>
<div class="btn">
<button>5</button>
<button>6</button>
<button>7</button>
<button>8</button>
<button>9</button>
<button>10</button>
<button>11</button>
<button>12</button>
</div>

<h3>color:black/white</h3>
<h4>Width:</h4>
<button>Medium</button>
<div id="box2">
<div id="cool">
    <h2>ITEM DETAILS</h2>
    <p>Style #40087</p>
    <p> Stand tall in cool style with the Women's Madden Girl Vaultt Wedge sandal.</p>
    <ul type="circle">
        <li>EVA upper in a wedge sandal style with an open toe</li> <br>
        <li>Buckled ankle strap closure</li> <br>
        <li> Multi strap detail</li> <br>
        <li>Smooth lining with a padded footbed</li> <br>
        <li>Durable rubber outsole with a 3.5" wedge heel</li>
    </ul>
</div>
<div id="box1">
    <h3>Size Chart</h3>
    <input type="radio">
    <h2>Store Pickup - FREE</h2>
    <input type="radio">
    <h3>Ship to Address</h3>
    <h3>Receive in 4-7 business days with standard</h3>

    <button id="btn">ADD TO CART</button>

    <h4>Enjoy $10 OFF Today* on your first purchase with the <br>
        FAMOUSLY YOU REWARDS® Credit Card at time of <br>
        account opening.Learn More</h4>
</div>

</div>`;

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  // addTocart(el);

  if (JSON_flag_signin == false) {
    cartadding.innerText = "Please Log in First";
  } else {
    if (duplicate(productdata) == false) {
      cartData.push({ ...productdata, quantity: 1 });

      console.log(cartData);
      console.log("cartData");
      console.log(cartData.quantity);
      localStorage.setItem("productsAdd", JSON.stringify(cartData));
      //   cartadding.innerText = "Product Added To Cart";
      alert("Product Successfully added to Cart");
      console.log("login", JSON_flag_signin);
    } else if (duplicate(productdata) == true) {
      cartData.forEach((element) => {
        if (element.id == productdata.id) {
          element.quantity++;
          console.log(cartData);
        }
      });
    }

    //window.location.href = "cart.html";
  }
});
function duplicate(product) {
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].id == product.id) {
      cartData[i].quantity++;
      return true;
    }
  }

  return false;
}
