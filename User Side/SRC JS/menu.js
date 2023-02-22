let productdata=JSON.parse(localStorage.getItem("product"))||null;

let alldata=[];
let fetcheddata=[]
window.addEventListener("load",()=>{
    fetchdata(1);
})

//filter variables start
 let filterby=document.getElementById("filterby")
 let checkbrand=document.querySelectorAll(".checkbrand")
 let size=document.querySelectorAll(".btn")
 let price=document.querySelectorAll(".price")
//filter variables end

let url=`https://63c77a71e52516043f3eaecd.mockapi.io/beverage`;
fetch(url).then((res)=>res.json()).then((data)=>{alldata=data; console.log(alldata)})

let procount=document.getElementById("procount")

let totaldatacount=null;

function fetchdata(pageNumber){
 fetch(`https://63c77a71e52516043f3eaecd.mockapi.io/beverage?page=${pageNumber}&limit=16`)
    .then((res)=>{
        showpages(65,16)
        return res.json()
    })
    .then((data)=>{
        fetcheddata=data;
        totaldatacount=alldata.length;
        procount.textContent=`${data[0].id}-${data[data.length-1].id} of ${alldata.length-1} products`
        displaydata(data)
    })
    .catch((err)=>{
        console.log(err)
    })   
}

let products=document.getElementById('products')
function displaydata(data){
    let count=data.length;
    
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
            alt="" class="firstimage">
    </div>
    <div id="proinfo">
        <h2>SALE</h2>
        <h3>${brand}</h3>
        <p id="protitle" class="producttitle">${name}</p>
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
let pages=document.getElementById("pages")


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

function pagebtn(text,pageNumber){
    return `<button class="pagebtn" data-page-number="${pageNumber}">${text}</button>&nbsp;&nbsp;`
}

function showpages(total,limit){

    let allpages=5;
    let pagedata=[];
    for(let i=1; i<allpages; i++){
      pagedata.push(pagebtn(i,i))
    }
    pages.innerHTML=`${pagedata.map((item)=>item).join(" ")}`
    let allbtn=document.querySelectorAll(".pagebtn");
    for(let btn of allbtn){
      btn.addEventListener("click",(e)=>{
        let pageNumber=e.target.dataset['pageNumber'];
        fetchdata(pageNumber)
      })
    }
  }

   //apply filter from here
   
 filterby.addEventListener("change",()=>{
    if(filterby.value=="top" || filterby.value=="newest"){
        let newdata=[] 
        for(let i=0; i<16; i++){
            newdata.push(alldata[i])
        }
        displaydata(newdata)
    }
  })

  //end filter code

  setTimeout(function(){
    let producttitle=document.querySelectorAll(".producttitle")
    console.log(producttitle)
    for(let i=0; i<producttitle.length; i++){
        producttitle[i].addEventListener("click",()=>{
            localStorage.setItem("product",JSON.stringify(alldata[i]))
        })
    }
  },1000)