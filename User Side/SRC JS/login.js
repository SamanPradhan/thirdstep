let loginUserEmail = document.getElementById("email");
let loginUserPassword = document.getElementById("password");
let loginUserform = document.querySelector("form");

let userAuthToken = localStorage.getItem("localAccessToken") || null;
let a = localStorage.getItem("loginUser") || false;

loginUserform.addEventListener("submit", (e) => {
  e.preventDefault();

  loginUser();
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
          location.href = "../Admin Side/admin.html";
        } else if (
          data[i].email == loginUserEmail.value &&
          data[i].password == loginUserPassword.value
        ) {
          a = true;
          localStorage.setItem("loginUser", a);
          console.log(a);
          return;
        }
      }
      return;
    });
}

console.log(a);
