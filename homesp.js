var list = [
  {
    Device: "Tv",
    Hang: "SamSung",
    ip: "127.0.0.1",
    Date: "2012-12-14",
    soluong: 1200,
  },
  {
    Device: "LapTop",
    Hang: "Dell",
    ip: "127.0.0.2",
    Date: "2012-7-13",
    soluong: 300,
  },
  {
    Device: "DienThoai",
    Hang: "Ip",
    ip: "127.0.0.3",
    Date: "2012-12-13",
    soluong: 1200,
  },
  {
    Device: "Tulanh",
    Hang: "Sony",
    ip: "127.0.0.2",
    Date: "2012-12-14",
    soluong: 810,
  },
];

localStorage.setItem("datatable", JSON.stringify(list));
renderlistchart();
function renderlistchart() {
  $(".table-roww").html("");
  let listproduct = JSON.parse(localStorage.getItem("datatable"));
  listproduct = logg.forEach((value, index) => {
    $(".table-roww").append(`
                <tr>
                  <th scope="row">${index + 1}</th>
                  <td class="talicenter">${value.Device}</td>
                  <td class="talicenter">${value.Hang}</td>
                  <td class="talicenter">${value.ip}</td>
                  <td class="talicenter">${value.Date}</td>
                  <td class="taliright">${value.soluong}</td>
              </tr>
       `);
  });
}

// function renderlistchart() {
//   let listproduct = JSON.parse(localStorage.getItem("datatable"));
//   listproduct.map((value, index) => {
//     tablee = ` <tr>
//                   <th scope="row">${index + 1}</th>
//                   <td class="talicenter">${value.Device}</td>
//                   <td class="talicenter">${value.Hang}</td>
//                   <td class="talicenter">${value.ip}</td>
//                   <td class="talicenter">${value.Date}</td>
//                   <td class="taliright">${value.soluong}</td>
//               </tr> `;
//   });

//   let table_row = document.querySelector(".table-roww");
//   table_row.innerHTML = tablee;
// }

function Logout() {
  window.location.href = "login.html";
}

function black() {
  $(".app").addClass("addapp");
  $(".menu").addClass("addmenu");
  $(".home_account").addClass("addhome_account");
}

function white() {
  $(".app").removeClass("addapp");
  $(".menu").removeClass("addmenu");
  $(".home_account").removeClass("addhome_account");
}
