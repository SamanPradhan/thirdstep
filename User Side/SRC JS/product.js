let productdata = JSON.parse(localStorage.getItem("product")) || {};
let cartData = JSON.parse(localStorage.getItem("productsAdd")) || [];
let JSON_flag_signin = JSON.parse(localStorage.getItem("login")) || true;
let container = document.getElementById("product-container");

console.log(productdata);

container.innerHTML = ` <div id="roll">
<p>Shoes / ${productdata.gender} / Sneakers and Athletic Shoes / Lifestyle and Fashion Sneakers</p>
</div>
<div id="container1">
<div id="cont">
<img src="${productdata.image1}" alt="">
<img src="${productdata.image2}" class="img-top" alt="">
</div>
<div id="box">
<h1>${productdata.name}</h1>
<h4 id="gender">${productdata.gender}</h4>
<h2 id="price">₹${productdata.price}</h2>
<h2 id="brand">${productdata.brand}</h2>
<h3 id="size">Size:</h3>
<div class="btn">
<button class="one active">5</button>
<button class="one">6</button>
<button class="one">7</button>
<button class="one">8</button>
<button class="one">9</button>
<button class="one">10</button>
<button class="one">11</button>
<button class="one">12</button>
</div>
<h3>color:black/white</h3>
<h4>Width:</h4>
<button>Medium</button>
<h3>Size Chart</h3>
 <input type="radio">
 <span style="color:grey;">Store Pickup - FREE</span>
 <h5>Find a Store for pickup options</h5><br>
<input type="radio">
<span style="color:grey;">Ship to Address</span>
<h5>Receive in 4-7 business days with standard</h5>
<button id="btn">ADD TO CART</button>
<h5><span style="color:rgb(235, 19, 55);">Enjoy $10 OFF Today*</span> on your first purchase with the <br>
 FAMOUSLY YOU REWARDS® Credit Card at time of <br>
 account opening.Learn More</h5>
 </div>
 </div>
<div id="cool">
    <h3>ITEM DETAILS</h3>
    <p>Style #40087</p>
    <p> Stand tall in cool style with the Women's Madden Girl Vaultt Wedge sandal.</p>
    <ul type="circle">
        <li>EVA upper in a wedge sandal style with an open toe</li> <br>
        <li>Buckled ankle strap closure</li> <br>
        <li> Multi strap detail</li> <br>
        <li>Smooth lining with a padded footbed</li> <br>
        <li>Durable rubber outsole with a 3.5" wedge heel</li>
    </ul>
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
          console.log(element);
          localStorage.setItem("productsAdd", JSON.stringify(cartData));
        }
      });
    }

    window.location.href = "cart.html";
  }
});
function duplicate(product) {
  for (let i = 0; i < cartData.length; i++) {
    if (cartData[i].id == product.id) {
      return true;
    }
  }

  return false;
}

var header = document.getElementsByClassName("btn");
var btns = document.getElementsByClassName("one");
console.log(btns)
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}