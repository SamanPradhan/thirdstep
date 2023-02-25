const url = `https://63c687494ebaa8028547befe.mockapi.io/`;
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
};
let product_details = document.querySelector(".sales-details");
async function fetch_product() {
  let req = await fetch(`${url}order`);
  let res = await req.json();

  let productData = res;
  console.log(productData);
  dataCard(productData);
  // product_details.innerHTML = productData
  //   .map((el) => {
  //     return `<div class="card">
  //       <div>
  //           <p><span class="name">User name:- </span><span class="ans-name">${el.firstName} ${el.lastName}</span></p>
  //           <p><span class="name">User Phone No:- </span> ${el.phoneNo}</p>
  //           <p><span class="name">User Adress:- </span> ${el.Address}</p>
  //           <p><span class="name">Total Order Value:- </span>${el.orderValue}</p>

  //       </div>
  //       <div id="order_table">
  //       <table>
  //       <thead>
  //       <th>brand</th>
  //       <th>name</th>
  //       <th>image</th>
  //       <th>gender</th>
  //       <th>size</th>
  //       <th>quantity</th>
  //       <th>price</th>

  //       </thead>
  //       <tbody></tbody>
  //       </table>
  //       </div>
  //   </div>`;
  //   })
  //   .join("");
}
fetch_product();
let admin_name = document.getElementById("admin_name");
let login_name = JSON.parse(localStorage.getItem("login_name")) || [];
admin_name.innerText = login_name;
console.log(login_name);

function dataCard(arr) {
  product_details.admin_name = null;
  arr.forEach((el) => {
    let div = document.createElement("div");
    let userNamecard = document.createElement("p");
    let userphoneNocard = document.createElement("p");
    let userAddresscard = document.createElement("p");
    let userorderValuecard = document.createElement("p");

    userNamecard.innerHTML = "User name:-" + el.firstName + " " + el.lastName;
    userphoneNocard.innerHTML = "User Phone No:-" + el.phoneNo;
    userAddresscard.innerHTML = "User Adress:-" + el.Address;
    userorderValuecard.innerHTML = "Total Order Value:-" + el.orderValue;

    div.append(
      userNamecard,
      userphoneNocard,
      userAddresscard,
      userorderValuecard
    );

    let div1 = document.createElement("div");
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let brand = document.createElement("th");
    let name = document.createElement("th");
    let image = document.createElement("th");
    let gender = document.createElement("thead");
    let size = document.createElement("thead");
    let quantity = document.createElement("thead");
    let price = document.createElement("thead");
    let tbody = document.createElement("tbody");
    brand.innerHTML = "brand";
    name.innerHTML = "name";
    gender.innerHTML = "gender";
    image.innerHTML = "image";
    size.innerHTML = "size";
    quantity.innerHTML = "quantity";
    price.innerHTML = "price";
    thead.append(brand, name, image, gender, size, quantity, price);

    el.products.forEach((element) => {
      let tr = document.createElement("tr");
      let name = document.createElement("td");
      let image = document.createElement("td");
      let gender = document.createElement("td");
      let size = document.createElement("td");
      let price = document.createElement("td");
      let brand = document.createElement("td");
      let quantity = document.createElement("td");

      name.innerText = element.name;
      image.setAttribute("src", element.image1);
      gender.innerText = element.gender;
      size.innerText = element.size;
      price.innerText = element.price;
      brand.innerText = element.brand;
      quantity.innerText = element.quantity;

      tr.append(brand, name, image, gender, size, quantity, price);
      tbody.append(tr);
    });
    table.append(thead, tbody);
    div1.append(table);
    product_details.append(div, table);
  });
}

function table(array) {}
