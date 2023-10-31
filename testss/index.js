let sendForm = document.getElementById("sendform");
console.log(sendForm);

sendForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let InputSearch = document.getElementById("searchInput");

  if (InputSearch.value === "") {
    alert("Ban chua nhap noi dung tim kiem");
    console.log("Rong");
  } else {
    alert("Da gui du lieu");
    console.log(InputSearch.value);
  }
});

function sendInformation() {
  var emaillogin = document.getElementById("emaillogin");
  var namelogin = document.getElementById("namelogin");
  var passwordlogin = document.getElementById("passwordlogin");

  let emailRex = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;

  if (emailRex.test(emaillogin.value) == false) {
    alert("Email khong hop le, Vui long nhap lai email");
    return false;
  }

  if (namelogin.value.length < 4) {
    alert("Ten khong hop le, Moi ban nhap lai");
    return false;
  }
  if (passwordlogin.value.length < 1) {
    alert("Ban chua nhap mat khau!");
    return false;
  }

  alert("Dang nhap thanh cong");
}

function sendContact() {
  var emaillogin = document.getElementById("emaillogin");
  var namelogin = document.getElementById("namelogin");
  var contact = document.getElementById("contact");
  let emailRex = /^[a-zA-z0-9._-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,4}$/;

  if (emailRex.test(emaillogin.value) == false) {
    alert("Email khong hop le, Vui long nhap lai email");
    return false;
  }

  if (namelogin.value.length < 4) {
    alert("Ten khong hop le, Moi ban nhap lai");
    return false;
  }
  //   if (contact.value.length < 10) {
  //     alert("Ban chua nhap noi dung!");
  //     return false;
  //   }

  alert("Da gui thanh cong");
}

var itemLists = {
  sp001: {
    name: "Sữa chua vị Kiwi",
    price: 21000,
    photo: "./images/sanpham/kiwi.jpg",
  },
  sp002: {
    name: "Sữa chua vị xoài",
    price: 21000,
    photo: "./images/sanpham/mango.jpg",
  },
  sp003: {
    name: "Sữa chua vị Dưa lưới",
    price: 21000,
    photo: "./images/sanpham/cantaloupe.jpg",
  },
  sp004: {
    name: "Sữa chua vị Mâm xôi",
    price: 21000,
    photo: "./images/sanpham/blackberry.jpg",
  },
  sp005: {
    name: "Sữa chua vị Dâu tây",
    price: 21000,
    photo: "./images/sanpham/strawberry.jpg",
  },
  sp006: {
    name: "Sữa chua vị Việt quất",
    price: 21000,
    photo: "./images/sanpham/blueberry.jpg",
  },
  sp007: {
    name: "Sữa chua vị Bưởi",
    price: 21000,
    photo: "./images/sanpham/grapes.jpg",
  },
  sp008: {
    name: "Sữa chua vị Táo xanh",
    price: 21000,
    photo: "./images/sanpham/green-apple.jpg",
  },
  sp009: {
    name: "Sữa chua vị Dứa",
    price: 21000,
    photo: "./images/sanpham/pineapple.jpg",
  },
};

function addCart(code) {
  let valueInput = document.getElementById(code);
  console.log(valueInput.value);
  let number = valueInput.value;

  if (typeof localStorage[code] === "undefined") {
    window.localStorage.setItem(code, number);
  }

  if (valueInput.value > 100) {
    valueInput.value = 100;
    alert("Tối đa chỉ đặt 100 sản phẩm");
    window.localStorage.setItem(code, 100);
  } else {
    number = parseInt(document.getElementById(code).value);
    current = parseInt(window.localStorage.getItem(code));
    window.localStorage.setItem(code, current + number);
  }
}
function showCart() {
  var itemList = {
    sp001: {
      name: "Sữa chua vị Kiwi",
      price: 21000,
      photo: "./images/sanpham/kiwi.jpg",
    },
    sp002: {
      name: "Sữa chua vị xoài",
      price: 21000,
      photo: "./images/sanpham/mango.jpg",
    },
    sp003: {
      name: "Sữa chua vị Dưa lưới",
      price: 21000,
      photo: "./images/sanpham/cantaloupe.jpg",
    },
    sp004: {
      name: "Sữa chua vị Mâm xôi",
      price: 21000,
      photo: "./images/sanpham/blackberry.jpg",
    },
    sp005: {
      name: "Sữa chua vị Dâu tây",
      price: 21000,
      photo: "./images/sanpham/strawberry.jpg",
    },
    sp006: {
      name: "Sữa chua vị Việt quất",
      price: 21000,
      photo: "./images/sanpham/blueberry.jpg",
    },
    sp007: {
      name: "Sữa chua vị Bưởi",
      price: 21000,
      photo: "./images/sanpham/grapes.jpg",
    },
    sp008: {
      name: "Sữa chua vị Táo xanh",
      price: 21000,
      photo: "./images/sanpham/green-apple.jpg",
    },
    sp009: {
      name: "Sữa chua vị Dứa",
      price: 21000,
      photo: "./images/sanpham/pineapple.jpg",
    },
  };
  var TotalPreTax = 0;
  var product = document.getElementById("id_product");
  if (localStorage && itemList) {
    // Kiểm tra xem localStorage và itemList có tồn tại
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key) && itemList.hasOwnProperty(key)) {
        let item = itemList[key];
        if (item) {
          var photo = item.photo;
          var getname = item.name;
          var price = item.price;
          var orderNumber = localStorage.getItem(key);
          var total = price * orderNumber;
          TotalPreTax += total;
          console.log(
            key,
            item,
            photo,
            getname,
            price,
            orderNumber,
            TotalPreTax
          );

          var tr1 = document.createElement("tr");
          tr1.id = key;

          var img = document.createElement("td");
          img.innerHTML = `<img src="${photo}" alt="" width="100px" />`;
          tr1.appendChild(img);

          var td_name = document.createElement("td");
          td_name.innerHTML = `<span>${getname}</span>`;
          tr1.appendChild(td_name);

          var td_orderNumber = document.createElement("td");
          td_orderNumber.innerHTML = `<span>${orderNumber}</span>`;
          tr1.appendChild(td_orderNumber);

          var td_price = document.createElement("td");
          td_price.innerHTML = `<span>${price}</span>`;
          tr1.appendChild(td_price);

          var td_total = document.createElement("td");
          td_total.innerHTML = `<span>${price * orderNumber}</span>`;
          tr1.appendChild(td_total);

          var td_delete = document.createElement("td");
          td_delete.innerHTML = `<i id="${key}" class="fa-solid fa-trash"><i>`;
          tr1.appendChild(td_delete);

          product.appendChild(tr1);
          //Xoa san pham ra gio hang

          td_delete.onclick = function removeCart() {
            localStorage.removeItem(key);
            location.reload("donhang.html");
          };
        }
      }
    }
  }
  var chietkhau = getDiscountRate() * TotalPreTax;
  var thue = getDiscountRate() * (TotalPreTax - chietkhau);
  var tongdon = TotalPreTax - chietkhau + thue;

  console.log(TotalPreTax);
  var td_totalpretax = document.createElement("tr");
  // td_totalpretax.innerHTML = `<span>${TotalPreTax}</span>`;
  // product.appendChild(td_totalpretax);

  var td_chietkhau = document.createElement("tr");
  // td_chietkhau.innerHTML = `<span>${chietkhau}</span>`;
  // product.appendChild(td_chietkhau);

  var td_thue = document.createElement("tr");
  // td_thue.innerHTML = `<span>${thue}</span>`;
  // product.appendChild(td_thue);

  var td_tongtien = document.createElement("tr");
  // td_tongtien.innerHTML = `<span>${tongdon}</span>`;
  // product.appendChild(td_tongtien);

  td_totalpretax.id = "tda";
  td_chietkhau.id = "tdb";
  td_thue.id = "tdc";
  td_tongtien.id = "tdd";

  product.appendChild(td_totalpretax);
  product.appendChild(td_chietkhau);
  product.appendChild(td_thue);
  product.appendChild(td_tongtien);

  var tr1a = document.getElementById("tda");
  var tr2b = document.getElementById("tdb");
  var tr3c = document.getElementById("tdc");
  var tr4d = document.getElementById("tdd");

  var td1a = document.createElement("td");
  var td2b = document.createElement("td");
  var td3c = document.createElement("td");
  var td4d = document.createElement("td");

  td1a.textContent = "Tổng thành tiền (A) = " + TotalPreTax;
  td1a.colSpan = 6;
  td2b.textContent = "Chiết Khấu (B) = 0.1 * A = " + chietkhau;
  td2b.colSpan = 6;
  td3c.textContent = "Thuế (C) = 10% x (A-B) = " + thue;
  td3c.colSpan = 6;
  td4d.textContent = "Tổng đơn hàng = A - B + C = " + tongdon;
  td4d.colSpan = 6;
  tr1a.appendChild(td1a);
  tr2b.appendChild(td2b);
  tr3c.appendChild(td3c);
  tr4d.appendChild(td4d);
}
function removeCart(code) {
  if (typeof window.localStorage[code] != "undefined") {
    window.localStorage.removeItem(code);

    document.getElementById(code).getElementsByTagName("tbody")[0].innerHTML =
      "";

    showCart();
  }
}

function getDiscountRate() {
  var d = new Date();
  var weekday = d.getDay();
  var totalMins = d.getHours * 60 + d.getMinutes();

  if (
    weekday >= 1 &&
    weekday <= 3 &&
    ((totalMins >= 420 && totalMins <= 660) ||
      (totalMins >= 780 && totalMins <= 1020))
  ) {
    return 0.1;
  }
  return 0;
}

window.onstorage = () => {
  showCart();
};
