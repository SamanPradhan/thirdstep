const url = `https://63c77a71e52516043f3eaecd.mockapi.io/`;
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};

async function fetch_product() {
  let req = await fetch(`${url}beverage`);
  let res = await req.json();
  let product_details = document.querySelector(".sales-details");
  let productData = res;
  console.log(productData);
  product_details.innerHTML = productData
    .map((el) => {
      return `<div class="card">
        <div class="img"><img src="${el.image1}" ></div>
        <div>
            <p><span class="name">Name:- </span><span class="ans-name">${el.name}</span></p>
            <p><span class="name">Brand:- </span> ${el.brand}</p>
            <p><span class="name">Gender:- </span> ${el.gender}</p>
            <p><span class="name">Size:- </span>${el.size}</p>
            <p><span class="name">Price:- </span>${el.price}</p>
        </div>
    </div>`;
    })
    .join("");
}
fetch_product();

///adding the products

let deleteId = document.getElementById("deleteId");

let addProductForm = document.querySelector("form");

async function deleteProduct() {
  try {
    let register_request = await fetch(`${url}beverage/${deleteId.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(register_request);
  } catch (error) {
    console.log(error);
  }
}

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteProduct();
  fetch_product();
});
