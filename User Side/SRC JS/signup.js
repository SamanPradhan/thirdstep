let registerUserform = document.querySelector("form");

let cartData = JSON.parse(localStorage.getItem("productsAdd")) || [];
registerUserform.addEventListener("submit", (e) => {
  e.preventDefault();
  registerUser();
});
// register
let registerUserFirstname = document.getElementById("firstName");
let registerUserLastname = document.getElementById("lastName");
let registerUserEmail = document.getElementById("email");
let registerUserPassword = document.getElementById("password");
let registerUserbirthDay = document.getElementById("birthDay");
let registerUserphoneNo = document.getElementById("phoneNo");

async function registerUser() {
  try {
    let obj = {
      firstName: registerUserFirstname.value,
      lastName: registerUserLastname.value,
      email: registerUserEmail.value,
      phoneNo: registerUserphoneNo.value,
      password: registerUserPassword.value,
      birthday: registerUserbirthDay.value,
    };

    let register_request = await fetch(
      `https://63c77a71e52516043f3eaecd.mockapi.io/Dominos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    console.log(register_request);
  } catch (error) {
    console.log(error);
  }
}
