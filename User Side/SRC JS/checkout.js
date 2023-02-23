let product=JSON.parse(localStorage.getItem("product"))||{}

// order summery variables
let totalprice=document.getElementById("totalprice")
let estimatedtotal=document.getElementById("estimatedtotal")
let productcount=document.getElementById("totalcount")
let productcard=document.getElementById("summeryproduct")
let zipdoller=document.getElementById("zipdoller")

// product append

//order summary variable end

// form data catching
let email=document.getElementById("email");
let fname=document.getElementById("firstname");
let lname=document.getElementById("lastname");
let streetadrs=document.getElementById("streedadds");
let optionaladrs=document.getElementById("opt");
let city=document.getElementById("city");
let state=document.getElementById("state");
let zipcode=document.getElementById("zipcode");
let phone=document.getElementById("phonenumber");
let submitbtn=document.getElementById("submitbtn");
submitbtn.addEventListener("click",()=>{
    let obj={
        email:email.value,
        fname:fname.value,
        lname:lname.value,
        streetadrs:streetadrs.value,
        optionaladrs:optionaladrs.value,
        city:city.value,
        state:state.value,
        zipcode:zipcode.value,
        phone:phone.value,
    }
    if(email.value==""){
        email.style.border="2px solid red"
    }
    else if(fname.value==""){
        fname.style.border="2px solid red"
    }
    else if(lname.value==""){
        lname.style.border="2px solid red"
    }
    else if(streetadrs.value==""){
        streetadrs.style.border="2px solid red"
    }
    else if(city.value==""){
        city.style.border="2px solid red"
    }
    else if(state.value=="state"){
        state.style.border="2px solid red"
    }
    else if(zipcode.value==""){
        zipcode.style.border="2px solid red"
    }
    else if(phone.value==""){
        phone.style.border="2px solid red"
    }
    else{
        console.log(obj)
        window.location.assign("finalpage.html")
    }
})

//closing of form data

// back to cart data link adding here using js because in html link are showing in blue color and I can't do text decoration none there.../

let backtocarttop=document.getElementById("topback")
backtocarttop.addEventListener('click',()=>{
    window.location.assign("cart.html")
})
let backtocartbottom=document.getElementById("backtocart")
backtocartbottom.addEventListener("click",()=>{
    window.location.assign("cart.html")
})
