let loginUserEmail = document.getElementById("email");
let loginUserPassword = document.getElementById("password");
let loginUserform = document.querySelector("form");

let userAuthToken = localStorage.getItem("localAccessToken") || null;

loginUserform.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("yes");
  if (
    loginUserEmail.value == "admin@gmail.com" &&
    loginUserPassword.value == "admin"
  ) {
    location.href = "../Admin Side/admin.html";
  } else {
    loginUser();
  }
});

async function loginUser() {
  try {
    console.log(loginUserPassword);
    let loginObj = {
      email: loginUserEmail.value,
      password: loginUserPassword.value,
    };

    let login_request = await fetch(
      `https://63c77a71e52516043f3eaecd.mockapi.io/Dominos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginObj),
      }
    );
    console.log(login_request);
  } catch (error) {
    console.log(error);
  }
}
