let loginUserEmail = document.getElementById("email");
let loginUserPassword = document.getElementById("password");
let loginUserform = document.querySelector("form");
let cartData = JSON.parse(localStorage.getItem("productsAdd")) || [];
let loginUserToken = JSON.parse(localStorage.getItem("loginUser")) || false;
console.log(loginUserToken, "loginUserToken");
let login_name = JSON.parse(localStorage.getItem("login_name")) || [];
loginUserform.addEventListener("submit", (e) => {
  e.preventDefault();
  //login box border red if empty
  if (loginUserEmail.value == "") {
    loginUserEmail.style.border = "2px solid red";
  } else if (loginUserPassword.value == "") {
    loginUserEmail.style.border = "1px solid black";
    loginUserPassword.style.border = "2px solid red";
  }
  //
  else {
    loginUserEmail.style.border = "1px solid black";
    loginUserPassword.style.border = "1px solid black";
    loginUser();
  }
});

function loginUser() {
  fetch(`https://63c77a71e52516043f3eaecd.mockapi.io/Dominos/`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        if (
          loginUserEmail.value == "admin@gmail.com" &&
          loginUserPassword.value == "admin"
        ) {
          if (loginUserToken == false) {
            location.href = "../Admin Side/admin.html";
          } else {
            alert("Please sign out before logging as Admin");
          }

          return;
        } else if (
          data[i].email == loginUserEmail.value &&
          data[i].password == loginUserPassword.value
        ) {
          loginUserToken = true;
          localStorage.setItem("loginUser", JSON.stringify(loginUserToken));
          login_name = data[i].firstName;
          localStorage.setItem("login_name", JSON.stringify(login_name));
          console.log(loginUserToken);
          alert("log in successful");
          location.href = "../User Side/menu.html";
          return;
        }
      }
      alert("Invalid Details");
      return;
    });
}
////login/signout option on navbar

/////signout/log in button

//let loginButton = document.getElementById("loginButton");
//let signout = document.getElementById("signoutButton");
let signout = document.getElementById("loginlogout");
// if (loginUserToken == true) {
//   console.log(login_name);
//   console.log("done");
//   loginButton.innerText = "Hi,  " + login_name;
// }

if (loginUserToken == true) {
  console.log("yes");
  signout.innerText = "Hi,  " + login_name + "                   Sign Out";
  signout.style.fontSize = "13px";
  signout.style.fontWeight = "bolder";
  signout.style.cursor = "pointer";
  signout.style.marginTop = "-28px";
  signout.style.marginLeft = "400px";
  // signout.addEventListener("click", () => {
  //   loginUserToken = false;
  //   login_name = "";
  // });
}

/*let loginButton = document.getElementById("loginButton");
let signout = document.getElementById("signoutButton");
loginandlogoutnames();
function loginandlogoutnames(){
  if (loginUserToken == true) {
    //console.log(login_name);
    loginButton.innerText = "Hi,  " + login_name;
  }
  
  if (loginUserToken == true) {
    signout.innerText = "Sign Out";
    loginButton.style.fontSize = "14px";
    signout.addEventListener("click", () => {
      console.log("clicked on signout")
      loginUserToken = false;
      login_name = "";
    });
  }
}
let loginlogout=document.getElementById("loginlogout")*/

signout.addEventListener("click", () => {
  loginUserToken = false;
  login_name = "";
  cartData = [];
  localStorage.setItem("cart", JSON.stringify(cartData));
  localStorage.setItem("loginUser", JSON.stringify(loginUserToken));
  localStorage.setItem("login_name", JSON.stringify(login_name));
  localStorage.setItem("productsAdd", JSON.stringify(cartData));
  window.location.href = "index.html";
});
