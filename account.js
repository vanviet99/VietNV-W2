function dk() {
  var usernamedk = $("#usernamedk").val();
  var passworddk = $("#passworddk").val();
  var user = {
    username: usernamedk,
    password: passworddk,
  };
  let data = JSON.parse(localStorage.getItem("data"))
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  if (usernamedk == "" && passworddk == "") {
    return alert("điền thiếu tk mk");
  } else {
    if (usernamedk.length <= 6 && passworddk.length <= 10) {
      return alert("user and pass quá ngắn");
    } else {
      let newdata = [...data, user];
      console.log(newdata);
      localStorage.setItem("data", JSON.stringify(newdata));
      return alert("Đăng Ký Thành Công")((window.location.href = "login.html"));
    }
  }
}

function login() {
  var username = $("#username").val();
  var password = $("#password").val();
  var Listdata = JSON.parse(localStorage.getItem("data"))
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  if (username == "" && password == "") {
    alert("username và password không được để trống");
  }
  let check = Listdata.find(
    (value) => value.username == username && value.password == password
  );
  console.log(check);
  if (check) {
    localStorage.setItem(
      "name",
      JSON.stringify({ username: username, password: password })
    );
    window.location.href = "/home.html";
    alert("đăng nhập thành công");
  }
}

let home = document.querySelector(".home_account");
let userusser = JSON.parse(localStorage.getItem("name"));
home.innerHTML = ` <p class='dp'><i class="fa-solid fa-user"></i><span class='home-span'>Welcom to ${userusser.username}</span></p> `;
