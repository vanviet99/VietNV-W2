// const db = [{ username: "asdasdasdasda", password: "asdasdasdasd" }];

function dk() {
  var usernamedk = $("#usernamedk").val();
  var passworddk = $("#passworddk").val();
  var user = {
    username: usernamedk,
    password: passworddk,
  };
  let data = JSON.parse(localStorage.getItem('data')) ? JSON.parse(localStorage.getItem('data')) : []
console.log(data)

  if (usernamedk == "" && passworddk == "") {
    return alert("điền thiếu tk mk");
  } else {
    if (usernamedk.length <= 6 && passworddk.length <= 10) {
      return alert("user and pass quá ngắn");
    } else {
      let newdata = data.push(user)
      console.log(newdata)
      localStorage.setItem('data',JSON.stringify(newdata))
      return (window.location.href = "login.html");
    }
  }
}

function login() {
  var username = $("#username").val();
  var password = $("#password").val();
  var Listdata = JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : [] ;
  // var list = JSON.parse(user);
  if (username == "" && password == "") {
    alert("username và password không được để trống");
  }
  let check = Listdata.find(
    (value) => value.username == username && value.password == password
  );
  if (check) {
    localStorage.setItem(
      "name",
      JSON.stringify({ username: username, password: password })
    );
    window.location.href = "/home.html";
    alert("đăng nhập thành công");
  }
  //  else if (username == list.username && password == list.password) {
  //   alert("đăng nhập thành công");
  //   window.location.href = "/home.html";
  //   localStorage.setItem(
  //     "name",
  //     JSON.stringify({ username: username, password: password })
  //   );
  // }
}

let home = document.querySelector(".home_account");
let userusser = JSON.parse(localStorage.getItem("name"));
home.innerHTML = ` <p class='dp'><i class="fa-solid fa-user"></i><span class='home-span'>Welcom to ${userusser[0].username}</span></p> `;

var list = [
  {
    Device: "Tv",
    Hãng: "SamSung",
    ip: "127.0.0.1",
    Date: "2012-12-14",
    soluong: 1200,
  },
  {
    Device: "LapTop",
    Hãng: "Dell",
    ip: "127.0.0.2",
    Date: "2012-7-13",
    soluong: 300,
  },
  {
    Device: "DienThoai",
    Hãng: "Ip",
    ip: "127.0.0.3",
    Date: "2012-12-13",
    soluong: 1200,
  },
  {
    Device: "Tulanh",
    Hãng: "Sony",
    ip: "127.0.0.2",
    Date: "2012-12-14",
    soluong: 810,
  },
];
let table_row = document.querySelector(".table-roww");
for (let i = 0; i < list.length; i++) {
  table_row.innerHTML = `  `;
}
