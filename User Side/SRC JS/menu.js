window.addEventListener("load",()=>{
    fetch(`https://63c77a71e52516043f3eaecd.mockapi.io/beverage`)
    .then((res)=>res.json())
    .then((data)=>{
        displaydata(data)
    })
})
let products=document.getElementById('products')
function displaydata(data){
    let cardlists=`
    ${
        data.map((item)=>(
            getcard(
                item.image1,
                item.image2,
                item.brand,
                item.name,
                item.price
            )
        )).join("")
    }
    `;
   
    products.innerHTML=cardlists;
}
function getcard(image1,image2,brand,name,price){
    let card=`<div>
    <div id="heart">
    <img src="https://cdn-icons-png.flaticon.com/512/14/14949.png?w=740&t=st=1676993626~exp=1676994226~hmac=27ebdcbb39c748208d4449aaa3f26253fae641221cbcee5eb68deea33ebae884">
    </div>
    <div id="img1">
        <img src="${image1}"
            alt="">
    </div>
    <div id="proinfo">
        <h2>SALE</h2>
        <h3>${brand}</h3>
        <p id="protitle">${name}</p>
        <div id="prices"><p id="price1">$${price}.99</p></div>
        <div id="rating">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star-half-stroke"></i>
        </div>
        <p>Coupon Excluded</p>
    </div>
</div>`;
return card;
}

let brandchkbox=document.getElementById("brdchk")
let brandplus=document.getElementById('brandplus')
let flag=false;
brandplus.addEventListener("click",()=>{
    flag=!flag;
    if(flag==true){
        brandplus.textContent="_";
        brandplus.style.marginBottom="30px";
        brandchkbox.style.display="block";
    }
    else if(flag==false){
        brandplus.textContent="+";
        brandplus.style.marginBottom="0px";
        brandchkbox.style.display="none";
    }
})

let pricecheckbox=document.getElementById("prcchk")
let priceplus=document.getElementById("priceplus")
priceplus.addEventListener("click",()=>{
    flag=!flag;
    if(flag==true){
        priceplus.textContent="_";
        priceplus.style.marginBottom="30px";
        pricecheckbox.style.display="block";
    }
    else if(flag==false){
        priceplus.textContent="+";
        priceplus.style.marginBottom="0px";
        pricecheckbox.style.display="none";
    }
})